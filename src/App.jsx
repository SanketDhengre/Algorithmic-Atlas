import { useState, useEffect, useMemo } from 'react';
import { ALL_QUESTIONS } from './data/questions.js';

// --- SHEET MAP ---
const SHEET_KEY = {
  'Love Babbar 450': 'lb',
  'Apna College (AK)': 'ak',
  'Arsh Goyal 45 Days': 'arsh',
};

function App() {
  // Load initial progress from localStorage with automatic migration from ID keys to normalized title keys
  const [progress, setProgress] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('dsa-progress') || '{}');
      const migrated = {};
      let needsSave = false;
      Object.keys(saved).forEach(key => {
        if (!isNaN(key)) {
          // It's a legacy numeric ID
          const q = ALL_QUESTIONS.find(item => item.id === parseInt(key));
          if (q) {
            const normKey = q.problem.toLowerCase().replace(/[^a-z0-9]/g, '').trim();
            if (!migrated[normKey]) {
              migrated[normKey] = saved[key];
            } else {
              migrated[normKey].done = migrated[normKey].done || saved[key].done;
              migrated[normKey].revised = migrated[normKey].revised || saved[key].revised;
            }
            needsSave = true;
          }
        } else {
          migrated[key] = saved[key];
        }
      });
      if (needsSave) {
        const data = {};
        Object.keys(migrated).forEach(k => {
          const val = migrated[k];
          if (val && (val.done || val.revised)) {
            data[k] = { done: !!val.done, revised: !!val.revised };
          }
        });
        localStorage.setItem('dsa-progress', JSON.stringify(data));
      }
      return migrated;
    } catch (e) {
      return {};
    }
  });

  const [sheet, setSheet] = useState('all');
  const [search, setSearch] = useState('');
  const [topic, setTopic] = useState('');
  const [diff, setDiff] = useState('');
  const [pendingOnly, setPendingOnly] = useState(false);
  const [revisedOnly, setRevisedOnly] = useState(false);
  const [collapsedTopics, setCollapsedTopics] = useState({});
  const [animatingOutIds, setAnimatingOutIds] = useState(new Set());
  const [toast, setToast] = useState({ show: false, message: '', success: false });

  // dismiss toast after 1.8s
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast(prev => ({ ...prev, show: false }));
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const showToast = (message, success = false) => {
    setToast({ show: true, message, success });
  };

  // When sheet changes, reset topic filter
  const handleSheetChange = (newSheet) => {
    setSheet(newSheet);
    setTopic('');
  };

  // Sync state changes to localStorage
  const saveProgress = (newProgress) => {
    const data = {};
    Object.keys(newProgress).forEach(k => {
      const val = newProgress[k];
      if (val && (val.done || val.revised)) {
        data[k] = { done: !!val.done, revised: !!val.revised };
      }
    });
    localStorage.setItem('dsa-progress', JSON.stringify(data));
  };

  const toggleDone = (key) => {
    const isDone = !progress[key]?.done;
    
    if (pendingOnly && isDone) {
      setAnimatingOutIds(prev => {
        const next = new Set(prev);
        next.add(key);
        return next;
      });
      
      setTimeout(() => {
        setProgress(prev => {
          const next = { ...prev, [key]: { ...prev[key], done: isDone } };
          saveProgress(next);
          return next;
        });
        setAnimatingOutIds(prev => {
          const next = new Set(prev);
          next.delete(key);
          return next;
        });
      }, 300);
    } else {
      setProgress(prev => {
        const next = { ...prev, [key]: { ...prev[key], done: isDone } };
        saveProgress(next);
        return next;
      });
    }
    
    showToast(isDone ? '✓ Marked as done!' : 'Unmarked', isDone);
  };

  const toggleRevised = (key) => {
    const isRevised = !progress[key]?.revised;
    
    if (revisedOnly && !isRevised) {
      setAnimatingOutIds(prev => {
        const next = new Set(prev);
        next.add(key);
        return next;
      });
      
      setTimeout(() => {
        setProgress(prev => {
          const next = { ...prev, [key]: { ...prev[key], revised: isRevised } };
          saveProgress(next);
          return next;
        });
        setAnimatingOutIds(prev => {
          const next = new Set(prev);
          next.delete(key);
          return next;
        });
      }, 300);
    } else {
      setProgress(prev => {
        const next = { ...prev, [key]: { ...prev[key], revised: isRevised } };
        saveProgress(next);
        return next;
      });
    }
    
    showToast(isRevised ? '🔁 Added to revision' : 'Removed from revision');
  };

  const toggleTopicCollapse = (topicName) => {
    setCollapsedTopics(prev => ({
      ...prev,
      [topicName]: !prev[topicName]
    }));
  };

  // Group all questions by normalized title for statistics calculation
  const stats = useMemo(() => {
    const groups = {};
    ALL_QUESTIONS.forEach(q => {
      const norm = q.problem.toLowerCase().replace(/[^a-z0-9]/g, '').trim();
      if (!groups[norm]) {
        groups[norm] = {
          key: norm,
          sheets: new Set(),
          done: !!progress[norm]?.done
        };
      }
      groups[norm].sheets.add(SHEET_KEY[q.sheet]);
    });

    const uniqueQuestions = Object.values(groups);

    const lbTotal = ALL_QUESTIONS.filter(q => SHEET_KEY[q.sheet] === 'lb').length;
    const akTotal = ALL_QUESTIONS.filter(q => SHEET_KEY[q.sheet] === 'ak').length;
    const arshTotal = ALL_QUESTIONS.filter(q => SHEET_KEY[q.sheet] === 'arsh').length;

    const lbDone = uniqueQuestions.filter(q => q.sheets.has('lb') && q.done).length;
    const akDone = uniqueQuestions.filter(q => q.sheets.has('ak') && q.done).length;
    const arshDone = uniqueQuestions.filter(q => q.sheets.has('arsh') && q.done).length;

    const overallDone = uniqueQuestions.filter(q => q.done).length;
    const overallTotal = uniqueQuestions.length;

    return {
      all: { done: overallDone, total: overallTotal },
      lb: { done: lbDone, total: lbTotal },
      ak: { done: akDone, total: akTotal },
      arsh: { done: arshDone, total: arshTotal },
    };
  }, [progress]);

  // Pre-process and deduplicate filtered questions
  const processedQuestions = useMemo(() => {
    const filtered = ALL_QUESTIONS.filter(q => {
      if (sheet !== 'all' && SHEET_KEY[q.sheet] !== sheet) return false;
      
      if (search) {
        const s = search.toLowerCase();
        const problemMatch = q.problem.toLowerCase().includes(s);
        const topicMatch = q.topic.toLowerCase().includes(s);
        if (!problemMatch && !topicMatch) return false;
      }
      
      if (diff && q.difficulty !== diff) return false;
      
      return true;
    });

    const groups = new Map();
    filtered.forEach(q => {
      const norm = q.problem.toLowerCase().replace(/[^a-z0-9]/g, '').trim();
      if (!groups.has(norm)) {
        groups.set(norm, []);
      }
      groups.get(norm).push(q);
    });

    const result = [];
    groups.forEach((items, norm) => {
      const base = items[0];
      
      const sheetsSet = new Set(items.map(item => SHEET_KEY[item.sheet]));
      const sheets = Array.from(sheetsSet);
      
      const companySet = new Set();
      items.forEach(item => {
        if (item.companies) {
          item.companies.split(/\s+/).forEach(c => {
            if (c) companySet.add(c.trim());
          });
        }
      });
      const mergedCompanies = Array.from(companySet).join(' ');

      const links = [];
      const seenTypes = new Set();
      items.forEach(item => {
        if (item.link) {
          const isLC = item.link.includes('leetcode') && !item.link.includes('search');
          const isGFG = item.link.includes('geeksforgeeks');
          let type = 'other';
          if (isLC) type = 'lc';
          else if (isGFG) type = 'gfg';
          
          if (!seenTypes.has(type)) {
            seenTypes.add(type);
            links.push({
              url: item.link,
              isLC,
              isGFG
            });
          }
        }
      });

      links.sort((a, b) => {
        if (a.isLC && !b.isLC) return -1;
        if (!a.isLC && b.isLC) return 1;
        if (a.isGFG && !b.isGFG) return -1;
        if (!a.isGFG && b.isGFG) return 1;
        return 0;
      });

      let difficulty = null;
      for (const item of items) {
        if (item.difficulty) {
          difficulty = item.difficulty;
          break;
        }
      }

      result.push({
        key: norm,
        id: base.id,
        problem: base.problem,
        topic: base.topic,
        difficulty,
        companies: mergedCompanies,
        sheets,
        links
      });
    });

    return result;
  }, [sheet, search, diff]);

  // Unique topics list for the current filtered list
  const uniqueTopics = useMemo(() => {
    const seen = new Set();
    const list = [];
    processedQuestions.forEach(q => {
      if (!seen.has(q.topic)) {
        seen.add(q.topic);
        list.push(q.topic);
      }
    });
    return list;
  }, [processedQuestions]);

  // Compute stats per topic dynamically based on active sheet deduplicated list
  const topicsMetadata = useMemo(() => {
    const activeSheetQuestions = ALL_QUESTIONS.filter(q => {
      if (sheet !== 'all' && SHEET_KEY[q.sheet] !== sheet) return false;
      return true;
    });

    const groups = new Map();
    activeSheetQuestions.forEach(q => {
      const norm = q.problem.toLowerCase().replace(/[^a-z0-9]/g, '').trim();
      if (!groups.has(norm)) {
        groups.set(norm, []);
      }
      groups.get(norm).push(q);
    });

    const byTopic = {};
    groups.forEach((items, norm) => {
      const base = items[0];
      if (!byTopic[base.topic]) {
        byTopic[base.topic] = [];
      }
      byTopic[base.topic].push({
        key: norm,
        done: !!progress[norm]?.done
      });
    });

    const meta = {};
    Object.keys(byTopic).forEach(topicName => {
      const list = byTopic[topicName];
      const done = list.filter(q => q.done).length;
      const total = list.length;
      const pct = total ? Math.round((done / total) * 100) : 0;
      meta[topicName] = { done, total, pct };
    });
    return meta;
  }, [sheet, progress]);

  // Apply topic, pending and revised filters
  const visibleQuestions = useMemo(() => {
    return processedQuestions.filter(q => {
      if (animatingOutIds.has(q.key)) return true;
      
      const isDone = !!progress[q.key]?.done;
      if (pendingOnly && isDone) return false;
      
      const isRevised = !!progress[q.key]?.revised;
      if (revisedOnly && !isRevised) return false;

      if (topic && q.topic !== topic) return false;
      
      return true;
    });
  }, [processedQuestions, progress, pendingOnly, revisedOnly, topic, animatingOutIds]);

  // Group visible questions by topic
  const groupedQuestions = useMemo(() => {
    const byTopic = {};
    visibleQuestions.forEach(q => {
      if (!byTopic[q.topic]) byTopic[q.topic] = [];
      byTopic[q.topic].push(q);
    });
    return byTopic;
  }, [visibleQuestions]);

  const togglePending = () => {
    setPendingOnly(!pendingOnly);
    if (!pendingOnly) setRevisedOnly(false);
  };

  const toggleRevisedFilter = () => {
    setRevisedOnly(!revisedOnly);
    if (!revisedOnly) setPendingOnly(false);
  };

  return (
    <>
      <header>
        <div className="masthead">
          <div className="eyebrow">Vol. <b>I</b> · Issue MMXXVI · Algorithmic Atlas</div>
          <div className="colophon-top">Compiled locally · <span>autosaved</span></div>
        </div>
        <div className="title-row">
          <h1 className="title">A Field Guide<br />to <em>Algorithms</em><sup>†</sup></h1>
          <div className="title-meta">
            <span className="big">
              {stats.all.done}
              <span style={{ color: 'var(--paper-dim)', fontSize: '20px' }}> / {stats.all.total}</span>
            </span>
            Problems Solved
          </div>
        </div>
        <nav className="tab-nav">
          <button 
            className={`tab-btn ${sheet === 'all' ? 'active' : ''}`} 
            data-sheet="all" 
            data-vol="00" 
            onClick={() => handleSheetChange('all')}
          >
            The Complete Atlas
          </button>
          <button 
            className={`tab-btn ${sheet === 'lb' ? 'active' : ''}`} 
            data-sheet="lb" 
            data-vol="01" 
            onClick={() => handleSheetChange('lb')}
          >
            Love Babbar · 450
          </button>
          <button 
            className={`tab-btn ${sheet === 'ak' ? 'active' : ''}`} 
            data-sheet="ak" 
            data-vol="02" 
            onClick={() => handleSheetChange('ak')}
          >
            Apna College
          </button>
          <button 
            className={`tab-btn ${sheet === 'arsh' ? 'active' : ''}`} 
            data-sheet="arsh" 
            data-vol="03" 
            onClick={() => handleSheetChange('arsh')}
          >
            Arsh Goyal · 45d
          </button>
        </nav>
      </header>

      <section className="sheet">
        <div className="stats-row">
          <div className="stat-card" data-sheet="all">
            <div className="stat-label">Overall</div>
            <div className="stat-numbers">
              <div className="stat-done">{stats.all.done}</div>
              <div className="stat-total">/ {stats.all.total}</div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${(stats.all.done / stats.all.total) * 100}%` }}></div>
            </div>
          </div>
          <div className="stat-card" data-sheet="lb">
            <div className="stat-label">Love Babbar</div>
            <div className="stat-numbers">
              <div className="stat-done">{stats.lb.done}</div>
              <div className="stat-total">/ {stats.lb.total}</div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${(stats.lb.done / stats.lb.total) * 100}%` }}></div>
            </div>
          </div>
          <div className="stat-card" data-sheet="ak">
            <div className="stat-label">Apna College</div>
            <div className="stat-numbers">
              <div className="stat-done">{stats.ak.done}</div>
              <div className="stat-total">/ {stats.ak.total}</div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${(stats.ak.done / stats.ak.total) * 100}%` }}></div>
            </div>
          </div>
          <div className="stat-card" data-sheet="arsh">
            <div className="stat-label">Arsh Goyal</div>
            <div className="stat-numbers">
              <div className="stat-done">{stats.arsh.done}</div>
              <div className="stat-total">/ {stats.arsh.total}</div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${(stats.arsh.done / stats.arsh.total) * 100}%` }}></div>
            </div>
          </div>
        </div>
      </section>

      <div className="controls">
        <div className="search-wrap">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input 
            type="text" 
            className="search-input" 
            placeholder="search the index…" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select 
          className="select-filter" 
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        >
          <option value="">All Topics</option>
          {uniqueTopics.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <select 
          className="select-filter" 
          value={diff}
          onChange={(e) => setDiff(e.target.value)}
        >
          <option value="">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <button 
          className={`filter-btn ${pendingOnly ? 'active' : ''}`}
          onClick={togglePending}
        >
          Pending
        </button>
        <button 
          className={`filter-btn ${revisedOnly ? 'active' : ''}`}
          onClick={toggleRevisedFilter}
        >
          Revisit
        </button>
        <span className="result-count">
          {visibleQuestions.length} questions
        </span>
      </div>

      <main className="main">
        {visibleQuestions.length === 0 ? (
          <div className="empty-state">
            <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <p>No questions match your filters.</p>
          </div>
        ) : (
          Object.keys(groupedQuestions).map(topicName => {
            const qs = groupedQuestions[topicName];
            const meta = topicsMetadata[topicName] || { done: 0, total: 1, pct: 0 };
            const isCollapsed = !!collapsedTopics[topicName];

            return (
              <div key={topicName} className="topic-section">
                <button 
                  className={`topic-header ${isCollapsed ? 'collapsed' : ''}`}
                  onClick={() => toggleTopicCollapse(topicName)}
                >
                  <span className="topic-name">{topicName}</span>
                  <span className="topic-progress">{meta.done}/{meta.total}</span>
                  <div className="topic-mini-bar">
                    <div className="topic-mini-fill" style={{ width: `${meta.pct}%` }}></div>
                  </div>
                  <svg className="topic-toggle" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className={`topic-body ${isCollapsed ? 'collapsed' : ''}`}>
                  {qs.map(q => {
                    const isDone = !!progress[q.key]?.done;
                    const isRevised = !!progress[q.key]?.revised;
                    const isAnimatingOut = animatingOutIds.has(q.key);
                    const shortCompanies = q.companies ? q.companies.split(' ').slice(0, 3).join(', ') : '';

                    return (
                      <div 
                        key={q.key} 
                        className={`q-card ${isDone ? 'done' : ''}`}
                        style={isAnimatingOut ? { opacity: 0, transform: 'scale(0.95)', transition: 'all 0.3s ease' } : undefined}
                      >
                        <div 
                          className="q-check" 
                          onClick={() => toggleDone(q.key)} 
                          title="Mark as done"
                        >
                          <svg width="10" height="10" fill="none" stroke="#0a0e1a" stroke-width="3" viewBox="0 0 24 24">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <div className="q-content">
                          <div className="q-name">{q.problem}</div>
                          <div className="q-meta">
                            {q.difficulty && (
                              <span className={`q-diff ${q.difficulty.toLowerCase()}`}>
                                {q.difficulty}
                              </span>
                            )}
                            {sheet === 'all' && q.sheets.map(sc => (
                              <span key={sc} className={`sheet-badge ${sc}`}>
                                {sc === 'lb' ? 'LB' : sc === 'ak' ? 'AK' : 'AG'}
                              </span>
                            ))}
                            {q.companies && (
                              <span className="q-companies" title={q.companies}>
                                🏢 {shortCompanies}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="q-actions">
                          <button 
                            className={`q-revised-btn ${isRevised ? 'active' : ''}`} 
                            onClick={() => toggleRevised(q.key)} 
                            title="Mark for revision"
                          >
                            ↺
                          </button>
                          {q.links.map((link, idx) => {
                            if (link.isGFG) {
                              return (
                                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="q-link gfg" title="Open on GeeksForGeeks">
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                    <text y="18" fontSize="16" fontWeight="bold">G</text>
                                  </svg>
                                </a>
                              );
                            } else if (link.isLC) {
                              return (
                                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="q-link lc" title="Open on LeetCode">
                                  <svg width="13" height="13" viewBox="0 0 95 111" fill="currentColor">
                                    <path d="M68.8 57.5H34.3c-1.2 0-2.2 1-2.2 2.2v6.6c0 1.2 1 2.2 2.2 2.2h34.5c1.2 0 2.2-1 2.2-2.2v-6.6c0-1.2-1-2.2-2.2-2.2zm-5.4-40.7L44.5 36.6c-.9.9-.9 2.3 0 3.2l4.7 4.7c.9.9 2.3.9 3.2 0l18.9-18.9c.9-.9.9-2.3 0-3.2l-4.7-4.7c-.9-.8-2.3-.8-3.2.1z" />
                                  </svg>
                                </a>
                              );
                            } else {
                              return (
                                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="q-link" title="Search on LeetCode">
                                  <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                                  </svg>
                                </a>
                              );
                            }
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        )}
      </main>

      <footer className="colophon">
        <div>Set in <em>Instrument Serif</em> &amp; JetBrains Mono</div>
        <div>Pressed in the browser · No server · Yours alone</div>
      </footer>

      <div id="toast" className={`${toast.show ? 'show' : ''} ${toast.success ? 'success' : ''}`}>
        {toast.message}
      </div>
    </>
  );
}

export default App;
