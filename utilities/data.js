export default [
  {
    title: "Add Two Numbers",
    description: "Write a function `solve(a, b)` that returns the sum of two numbers.",
    difficulty: "Easy",
    starter_code: "function solve(a, b) {\n  // your code here\n}",
    solution: "function solve(a, b) { return a + b; }",
    test_cases: [
      { input: "1, 2", output: "3" },
      { input: "-1, 5", output: "4" },
      { input: "10, 20", output: "30" }
    ]
  },
  {
    title: "Find Maximum",
    description: "Write a function `solve(arr)` that returns the maximum number in an array.",
    difficulty: "Medium",
    starter_code: "function solve(arr) {\n  // your code here\n}",
    solution: "function solve(arr) { return Math.max(...arr); }",
    test_cases: [
      { input: "[1, 3, 2]", output: "3" },
      { input: "[-5, -1, -10]", output: "-1" },
      { input: "[42]", output: "42" }
    ]
  },
  {
    title: "Reverse String",
    description: "Write a function `solve(str)` that reverses a string.",
    difficulty: "Hard",
    starter_code: "function solve(str) {\n  // your code here\n}",
    solution: "function solve(str) { return str.split('').reverse().join(''); }",
    test_cases: [
      { input: "'hello'", output: "'olleh'" },
      { input: "'algo'", output: "'ogla'" },
      { input: "''", output: "''" }
    ]
  }
];