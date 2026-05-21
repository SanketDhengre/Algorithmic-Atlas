// DSA Patterns — sourced from:
// https://medium.com/@abhijeetv007/dsa-patterns-0e87764627e1
// All 22 patterns included

export const DSA_PATTERNS = [
  {
    pattern: "Sliding Window",
    description: "A subarray or substring that moves over data to solve problems efficiently in linear time.",
    problems: [
      { problem: "Maximum Sum Subarray of Size K", link: "https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1", difficulty: "Easy" },
      { problem: "Number of Subarrays having Average ≥ Threshold", link: "https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/", difficulty: "Medium" },
      { problem: "Repeated DNA Sequences", link: "https://leetcode.com/problems/repeated-dna-sequences/", difficulty: "Medium" },
      { problem: "Permutation in String", link: "https://leetcode.com/problems/permutation-in-string/", difficulty: "Medium" },
      { problem: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Hard" },
      { problem: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", difficulty: "Medium" },
      { problem: "Minimum Size Subarray Sum", link: "https://leetcode.com/problems/minimum-size-subarray-sum/", difficulty: "Medium" },
      { problem: "Subarray Product Less Than K", link: "https://leetcode.com/problems/subarray-product-less-than-k/", difficulty: "Medium" },
      { problem: "Max Consecutive Ones III", link: "https://leetcode.com/problems/max-consecutive-ones-iii/", difficulty: "Medium" },
      { problem: "Fruits Into Baskets", link: "https://leetcode.com/problems/fruit-into-baskets/", difficulty: "Medium" },
      { problem: "Count Number of Nice Subarrays", link: "https://leetcode.com/problems/count-number-of-nice-subarrays/", difficulty: "Medium" },
      { problem: "Minimum Window Substring", link: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Hard" },
    ]
  },
  {
    pattern: "Two Pointers",
    description: "Involves two different indices moving through the input to solve problems efficiently.",
    problems: [
      { problem: "Two Sum II – Input Array is Sorted", link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/", difficulty: "Medium" },
      { problem: "Sort Colors (Dutch National Flag)", link: "https://leetcode.com/problems/sort-colors/", difficulty: "Medium" },
      { problem: "Next Permutation", link: "https://leetcode.com/problems/next-permutation/", difficulty: "Medium" },
      { problem: "Bag of Tokens", link: "https://leetcode.com/problems/bag-of-tokens/", difficulty: "Medium" },
      { problem: "Container With Most Water", link: "https://leetcode.com/problems/container-with-most-water/", difficulty: "Medium" },
      { problem: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Hard" },
    ]
  },
  {
    pattern: "Fast & Slow Pointers",
    description: "Two pointers moving at different speeds to detect cycles or find positions in a list.",
    problems: [
      { problem: "Linked List Cycle II", link: "https://leetcode.com/problems/linked-list-cycle-ii/", difficulty: "Medium" },
      { problem: "Remove Nth Node From End of List", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", difficulty: "Medium" },
      { problem: "Find the Duplicate Number", link: "https://leetcode.com/problems/find-the-duplicate-number/", difficulty: "Medium" },
      { problem: "Palindrome Linked List", link: "https://leetcode.com/problems/palindrome-linked-list/", difficulty: "Easy" },
    ]
  },
  {
    pattern: "Prefix Sum",
    description: "Stores cumulative sums to allow quick subarray range queries in O(1) time.",
    problems: [
      { problem: "Find the Middle Index in Array", link: "https://leetcode.com/problems/find-the-middle-index-in-array/", difficulty: "Easy" },
      { problem: "Product of Array Except Self", link: "https://leetcode.com/problems/product-of-array-except-self/", difficulty: "Medium" },
      { problem: "Maximum Product Subarray", link: "https://leetcode.com/problems/maximum-product-subarray/", difficulty: "Medium" },
      { problem: "Number of Ways to Split Array", link: "https://leetcode.com/problems/number-of-ways-to-split-array/", difficulty: "Medium" },
      { problem: "Range Sum Query 2D – Immutable", link: "https://leetcode.com/problems/range-sum-query-2d-immutable/", difficulty: "Medium" },
    ]
  },
  {
    pattern: "Overlapping Intervals",
    description: "Manipulates intervals through sorting and merging based on start and end times.",
    problems: [
      { problem: "Merge Intervals", link: "https://leetcode.com/problems/merge-intervals/", difficulty: "Medium" },
      { problem: "Insert Interval", link: "https://leetcode.com/problems/insert-interval/", difficulty: "Medium" },
      { problem: "My Calendar II", link: "https://leetcode.com/problems/my-calendar-ii/", difficulty: "Medium" },
      { problem: "Minimum Number of Arrows to Burst Balloons", link: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/", difficulty: "Medium" },
      { problem: "Non-overlapping Intervals", link: "https://leetcode.com/problems/non-overlapping-intervals/", difficulty: "Medium" },
    ]
  },
  {
    pattern: "Cyclic Sort",
    description: "Efficiently places numbers at their correct index positions for consecutively ordered problems.",
    problems: [
      { problem: "Missing Number", link: "https://leetcode.com/problems/missing-number/", difficulty: "Easy" },
      { problem: "Find All Missing Numbers", link: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/", difficulty: "Easy" },
      { problem: "Set Mismatch", link: "https://leetcode.com/problems/set-mismatch/", difficulty: "Easy" },
      { problem: "First Missing Positive", link: "https://leetcode.com/problems/first-missing-positive/", difficulty: "Hard" },
    ]
  },
  {
    pattern: "In-place Linked List Reversal",
    description: "Reversing a linked list or parts of it without using extra space.",
    problems: [
      { problem: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/", difficulty: "Easy" },
      { problem: "Reverse Nodes in k-Group", link: "https://leetcode.com/problems/reverse-nodes-in-k-group/", difficulty: "Hard" },
      { problem: "Swap Nodes in Pairs", link: "https://leetcode.com/problems/swap-nodes-in-pairs/", difficulty: "Medium" },
    ]
  },
  {
    pattern: "Matrix Manipulation",
    description: "2D array traversal, rotation, transformation, and island-style grid problems.",
    problems: [
      { problem: "Rotate Image", link: "https://leetcode.com/problems/rotate-image/", difficulty: "Medium" },
      { problem: "Spiral Matrix", link: "https://leetcode.com/problems/spiral-matrix/", difficulty: "Medium" },
      { problem: "Set Matrix Zeroes", link: "https://leetcode.com/problems/set-matrix-zeroes/", difficulty: "Medium" },
      { problem: "Game of Life", link: "https://leetcode.com/problems/game-of-life/", difficulty: "Medium" },
      { problem: "Number of Islands", link: "https://leetcode.com/problems/number-of-islands/", difficulty: "Medium" },
      { problem: "Max Area of Island", link: "https://leetcode.com/problems/max-area-of-island/", difficulty: "Medium" },
      { problem: "Flood Fill", link: "https://leetcode.com/problems/flood-fill/", difficulty: "Easy" },
    ]
  },
  {
    pattern: "Breadth-First Search (BFS)",
    description: "Explores nodes level by level using a queue — ideal for shortest path problems.",
    problems: [
      { problem: "Shortest Path in Binary Matrix", link: "https://leetcode.com/problems/shortest-path-in-binary-matrix/", difficulty: "Medium" },
      { problem: "Rotten Oranges", link: "https://leetcode.com/problems/rotting-oranges/", difficulty: "Medium" },
      { problem: "As Far from Land as Possible", link: "https://leetcode.com/problems/as-far-from-land-as-possible/", difficulty: "Medium" },
      { problem: "Word Ladder", link: "https://leetcode.com/problems/word-ladder/", difficulty: "Hard" },
      { problem: "Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", difficulty: "Medium" },
      { problem: "Zigzag Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", difficulty: "Medium" },
      { problem: "Maximum Width of Binary Tree", link: "https://leetcode.com/problems/maximum-width-of-binary-tree/", difficulty: "Medium" },
      { problem: "All Nodes Distance K in Binary Tree", link: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/", difficulty: "Medium" },
    ]
  },
  {
    pattern: "Depth-First Search (DFS)",
    description: "Explores as far as possible along a branch before backtracking.",
    problems: [
      { problem: "Number of Closed Islands", link: "https://leetcode.com/problems/number-of-closed-islands/", difficulty: "Medium" },
      { problem: "Coloring a Border", link: "https://leetcode.com/problems/coloring-a-border/", difficulty: "Medium" },
      { problem: "Number of Enclaves", link: "https://leetcode.com/problems/number-of-enclaves/", difficulty: "Medium" },
      { problem: "Time Needed to Inform All Employees", link: "https://leetcode.com/problems/time-needed-to-inform-all-employees/", difficulty: "Medium" },
      { problem: "Find Eventual Safe States", link: "https://leetcode.com/problems/find-eventual-safe-states/", difficulty: "Medium" },
    ]
  },
  {
    pattern: "Backtracking",
    description: "Explore all possibilities by building solutions incrementally and abandoning invalid paths.",
    problems: [
      { problem: "Combination Sum", link: "https://leetcode.com/problems/combination-sum/", difficulty: "Medium" },
      { problem: "Combination Sum II", link: "https://leetcode.com/problems/combination-sum-ii/", difficulty: "Medium" },
      { problem: "Combination Sum III", link: "https://leetcode.com/problems/combination-sum-iii/", difficulty: "Medium" },
      { problem: "Word Search", link: "https://leetcode.com/problems/word-search/", difficulty: "Medium" },
      { problem: "Sudoku Solver", link: "https://leetcode.com/problems/sudoku-solver/", difficulty: "Hard" },
      { problem: "Split a String Into Max Unique Substrings", link: "https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/", difficulty: "Medium" },
    ]
  },
  {
    pattern: "Modified Binary Search",
    description: "Binary search adapted for rotated arrays, unsorted arrays, or specialized conditions.",
    problems: [
      { problem: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Medium" },
      { problem: "Find Minimum in Rotated Sorted Array", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", difficulty: "Medium" },
      { problem: "Find Peak Element", link: "https://leetcode.com/problems/find-peak-element/", difficulty: "Medium" },
      { problem: "Single Element in a Sorted Array", link: "https://leetcode.com/problems/single-element-in-a-sorted-array/", difficulty: "Medium" },
      { problem: "Koko Eating Bananas", link: "https://leetcode.com/problems/koko-eating-bananas/", difficulty: "Medium" },
      { problem: "Median of Two Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/", difficulty: "Hard" },
    ]
  },
  {
    pattern: "Bitwise XOR",
    description: "Leverages XOR properties to find missing or duplicate numbers with no extra space.",
    problems: [
      { problem: "Missing Number", link: "https://leetcode.com/problems/missing-number/", difficulty: "Easy" },
      { problem: "Single Number II", link: "https://leetcode.com/problems/single-number-ii/", difficulty: "Medium" },
      { problem: "Single Number III", link: "https://leetcode.com/problems/single-number-iii/", difficulty: "Medium" },
      { problem: "Find the Original Array of Prefix XOR", link: "https://leetcode.com/problems/find-the-original-array-of-prefix-xor/", difficulty: "Medium" },
      { problem: "XOR Queries of a Subarray", link: "https://leetcode.com/problems/xor-queries-of-a-subarray/", difficulty: "Medium" },
    ]
  },
  {
    pattern: "Top K Elements",
    description: "Uses heaps (Priority Queues) to efficiently track the largest or smallest K elements.",
    problems: [
      { problem: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Medium" },
      { problem: "Kth Largest Element in an Array", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/", difficulty: "Medium" },
      { problem: "Ugly Number II", link: "https://leetcode.com/problems/ugly-number-ii/", difficulty: "Medium" },
      { problem: "K Closest Points to Origin", link: "https://leetcode.com/problems/k-closest-points-to-origin/", difficulty: "Medium" },
    ]
  },
  {
    pattern: "K-way Merge",
    description: "Uses a heap to efficiently merge multiple sorted lists or arrays.",
    problems: [
      { problem: "Find K Pairs with Smallest Sums", link: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/", difficulty: "Medium" },
      { problem: "Kth Smallest Element in a Sorted Matrix", link: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/", difficulty: "Medium" },
      { problem: "Merge K Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Hard" },
      { problem: "Smallest Range Covering Elements from K Lists", link: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/", difficulty: "Hard" },
    ]
  },
  {
    pattern: "Two Heaps",
    description: "Uses a max-heap and min-heap together to efficiently manage dynamic medians.",
    problems: [
      { problem: "Find Median from Data Stream", link: "https://leetcode.com/problems/find-median-from-data-stream/", difficulty: "Hard" },
      { problem: "Sliding Window Median", link: "https://leetcode.com/problems/sliding-window-median/", difficulty: "Hard" },
      { problem: "IPO", link: "https://leetcode.com/problems/ipo/", difficulty: "Hard" },
    ]
  },
  {
    pattern: "Monotonic Stack",
    description: "Maintains elements in increasing or decreasing order for efficient range queries.",
    problems: [
      { problem: "Next Greater Element II", link: "https://leetcode.com/problems/next-greater-element-ii/", difficulty: "Medium" },
      { problem: "Next Greater Node in Linked List", link: "https://leetcode.com/problems/next-greater-node-in-linked-list/", difficulty: "Medium" },
      { problem: "Daily Temperatures", link: "https://leetcode.com/problems/daily-temperatures/", difficulty: "Medium" },
      { problem: "Online Stock Span", link: "https://leetcode.com/problems/online-stock-span/", difficulty: "Medium" },
      { problem: "Maximum Width Ramp", link: "https://leetcode.com/problems/maximum-width-ramp/", difficulty: "Medium" },
      { problem: "Largest Rectangle in Histogram", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/", difficulty: "Hard" },
    ]
  },
  {
    pattern: "Trie",
    description: "Prefix-tree data structure for fast prefix-based searches and string manipulation.",
    problems: [
      { problem: "Implement Trie (Prefix Tree)", link: "https://leetcode.com/problems/implement-trie-prefix-tree/", difficulty: "Medium" },
      { problem: "Design Add and Search Words Data Structure", link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/", difficulty: "Medium" },
      { problem: "Search Suggestions System", link: "https://leetcode.com/problems/search-suggestions-system/", difficulty: "Medium" },
      { problem: "Extra Characters in a String", link: "https://leetcode.com/problems/extra-characters-in-a-string/", difficulty: "Medium" },
      { problem: "Index Pairs of a String", link: "https://leetcode.com/problems/index-pairs-of-a-string/", difficulty: "Easy" },
    ]
  },
  {
    pattern: "Trees",
    description: "Tree traversal, recursion, and structural properties of binary and BST structures.",
    problems: [
      { problem: "Validate Binary Search Tree", link: "https://leetcode.com/problems/validate-binary-search-tree/", difficulty: "Medium" },
      { problem: "Even Odd Tree", link: "https://leetcode.com/problems/even-odd-tree/", difficulty: "Medium" },
      { problem: "Deepest Leaves Sum", link: "https://leetcode.com/problems/deepest-leaves-sum/", difficulty: "Medium" },
      { problem: "Add One Row to Tree", link: "https://leetcode.com/problems/add-one-row-to-tree/", difficulty: "Medium" },
      { problem: "Reverse Odd Levels of Binary Tree", link: "https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/", difficulty: "Medium" },
      { problem: "Lowest Common Ancestor of BST", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", difficulty: "Medium" },
      { problem: "Binary Tree Maximum Path Sum", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", difficulty: "Hard" },
    ]
  },
  {
    pattern: "Dynamic Programming",
    description: "Solves optimization problems by breaking them into overlapping subproblems.",
    problems: [
      { problem: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/", difficulty: "Easy" },
      { problem: "House Robber", link: "https://leetcode.com/problems/house-robber/", difficulty: "Medium" },
      { problem: "Edit Distance", link: "https://leetcode.com/problems/edit-distance/", difficulty: "Medium" },
      { problem: "Unique Paths", link: "https://leetcode.com/problems/unique-paths/", difficulty: "Medium" },
      { problem: "Partition Equal Subset Sum", link: "https://leetcode.com/problems/partition-equal-subset-sum/", difficulty: "Medium" },
      { problem: "Longest Common Subsequence", link: "https://leetcode.com/problems/longest-common-subsequence/", difficulty: "Medium" },
      { problem: "Decode Ways", link: "https://leetcode.com/problems/decode-ways/", difficulty: "Medium" },
      { problem: "0/1 Knapsack Problem", link: "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1", difficulty: "Medium" },
    ]
  },
  {
    pattern: "Graphs",
    description: "Connectivity, pathfinding, cycle detection, and topological sort on graph structures.",
    problems: [
      { problem: "Course Schedule", link: "https://leetcode.com/problems/course-schedule/", difficulty: "Medium" },
      { problem: "Course Schedule II", link: "https://leetcode.com/problems/course-schedule-ii/", difficulty: "Medium" },
      { problem: "Graph Valid Tree", link: "https://leetcode.com/problems/graph-valid-tree/", difficulty: "Medium" },
      { problem: "Number of Connected Components", link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/", difficulty: "Medium" },
      { problem: "Pacific Atlantic Water Flow", link: "https://leetcode.com/problems/pacific-atlantic-water-flow/", difficulty: "Medium" },
      { problem: "Clone Graph", link: "https://leetcode.com/problems/clone-graph/", difficulty: "Medium" },
      { problem: "Network Delay Time", link: "https://leetcode.com/problems/network-delay-time/", difficulty: "Medium" },
    ]
  },
  {
    pattern: "Greedy",
    description: "Make locally optimal choices at each step to reach a globally optimal solution.",
    problems: [
      { problem: "Jump Game II", link: "https://leetcode.com/problems/jump-game-ii/", difficulty: "Medium" },
      { problem: "Gas Station", link: "https://leetcode.com/problems/gas-station/", difficulty: "Medium" },
      { problem: "Boats to Save People", link: "https://leetcode.com/problems/boats-to-save-people/", difficulty: "Medium" },
      { problem: "Candy", link: "https://leetcode.com/problems/candy/", difficulty: "Hard" },
      { problem: "Bag of Tokens", link: "https://leetcode.com/problems/bag-of-tokens/", difficulty: "Medium" },
      { problem: "Non-overlapping Intervals", link: "https://leetcode.com/problems/non-overlapping-intervals/", difficulty: "Medium" },
    ]
  },
  {
    pattern: "Design Data Structure",
    description: "Build custom data structures optimized for specific operations and access patterns.",
    problems: [
      { problem: "LRU Cache", link: "https://leetcode.com/problems/lru-cache/", difficulty: "Medium" },
      { problem: "LFU Cache", link: "https://leetcode.com/problems/lfu-cache/", difficulty: "Hard" },
      { problem: "Insert Delete GetRandom O(1)", link: "https://leetcode.com/problems/insert-delete-getrandom-o1/", difficulty: "Medium" },
      { problem: "Design Twitter", link: "https://leetcode.com/problems/design-twitter/", difficulty: "Medium" },
      { problem: "Design Tic-Tac-Toe", link: "https://leetcode.com/problems/design-tic-tac-toe/", difficulty: "Medium" },
    ]
  },
];
