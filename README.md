# 📚 Algorithmic Atlas

> *A Field Guide to Algorithms* — A beautifully designed, browser-first DSA tracker for serious problem solvers.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-black?style=for-the-badge&logo=vercel)](https://algorithmic-atlas-9n3nl7zyr-sanket-dhengres-projects.vercel.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## ✨ Overview

**Algorithmic Atlas** is a clean, offline-first Data Structures & Algorithms practice tracker. It aggregates three of the most popular DSA sheets into one unified interface, letting you track your progress, filter by topic or difficulty, and mark problems for revision — all without any backend or login required.

Your progress is saved **entirely in your browser** via `localStorage`. No accounts. No servers. Just you and the problems.

---

## 🗂️ DSA Sheets Included

| Sheet | Volume | Problems |
|-------|--------|----------|
| **Love Babbar 450** | Vol. 01 | 450 curated DSA problems |
| **Apna College (AK)** | Vol. 02 | Abdul Kalam sheet by Apna College |
| **Arsh Goyal 45 Days** | Vol. 03 | Intensive 45-day challenge sheet |
| **The Complete Atlas** | All | Deduplicated union of all three sheets |

---

## 🚀 Features

- **📊 Progress Dashboard** — Real-time stats for each sheet with animated progress bars
- **🔍 Smart Search** — Search by problem name or topic across all sheets
- **🏷️ Filters** — Filter by Topic, Difficulty (Easy / Medium / Hard), Pending, or Revisit queue
- **✅ Mark as Done** — One-click checkbox to track solved problems
- **🔁 Revision Queue** — Flag problems you want to revisit later
- **📂 Collapsible Topics** — Collapse/expand topic groups with per-topic progress indicators
- **🏢 Company Tags** — See which companies have asked each problem
- **🔗 Direct Links** — Jump directly to LeetCode or GeeksForGeeks problems
- **💾 Auto-Save** — Progress persists in `localStorage` automatically
- **📰 Editorial Design** — Unique newspaper / field-guide aesthetic inspired by print typography
- **📱 Responsive** — Works on desktop and mobile

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI framework |
| **Vite 5** | Build tool & dev server |
| **Vanilla CSS** | Custom styling (no frameworks) |
| **localStorage** | Client-side persistence |
| **ESLint** | Code linting |

---

## 🏃 Getting Started

### Prerequisites
- Node.js `>= 18`
- npm `>= 9`

### Installation

```bash
# Clone the repository
git clone https://github.com/SanketDhengre/Algorithmic-Atlas.git

# Navigate into the project
cd Algorithmic-Atlas

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output is generated in the `dist/` folder.

---

## 📁 Project Structure

```
Algorithmic-Atlas/
├── public/                 # Static assets
├── src/
│   ├── data/
│   │   └── questions.js    # All DSA questions dataset (LB, AK, Arsh)
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global styles & design system
│   └── main.jsx            # React entry point
├── index.html              # HTML shell
├── vite.config.js          # Vite configuration
└── package.json
```

---

## 🧠 How Progress is Saved

Progress is stored in your browser's `localStorage` under the key `dsa-progress`. Each problem is identified by a normalized key derived from its title:

```js
key = problem.toLowerCase().replace(/[^a-z0-9]/g, '').trim()
```

This means:
- Progress survives page refreshes ✅
- Progress is tied to your browser — **not synced across devices** ⚠️
- No data is ever sent to any server 🔒

---

## 🚢 Deployment

This project is deployed on **Vercel** with automatic deployments on every push to `main`.

| Branch | Environment | URL |
|--------|-------------|-----|
| `main` | Production | [algorithmic-atlas.vercel.app](https://algorithmic-atlas-9n3nl7zyr-sanket-dhengres-projects.vercel.app) |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👤 Author

**Sanket Dhengre**
- GitHub: [@SanketDhengre](https://github.com/SanketDhengre)
- Email: sanketdhengre@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <em>Set in Instrument Serif & JetBrains Mono · Pressed in the browser · No server · Yours alone</em>
</div>
