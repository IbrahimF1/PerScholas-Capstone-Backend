export default [
  // ==================== EASY PROBLEMS (15) ====================
  {
    title: "Add Two Numbers",
    description: `## Problem Description

Write a function \`solve(a, b)\` that returns the sum of two numbers.

## Task

Your function should take two numeric parameters and return their sum. This is a fundamental arithmetic operation that forms the basis of many more complex algorithms.

## Input

- \`a\`: A number (can be positive, negative, or zero)
- \`b\`: A number (can be positive, negative, or zero)

## Output

- Return the sum of \`a\` and \`b\``,
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
    title: "Subtract Two Numbers",
    description: `## Problem Description

Write a function \`solve(a, b)\` that returns the difference between two numbers.

## Task

Your function should subtract the second number from the first and return the result. Subtraction is a basic arithmetic operation used in many calculations.

## Input

- \`a\`: A number (can be positive, negative, or zero)
- \`b\`: A number (can be positive, negative, or zero)

## Output

- Return \`a - b\``,
    difficulty: "Easy",
    starter_code: "function solve(a, b) {\n  // your code here\n}",
    solution: "function solve(a, b) { return a - b; }",
    test_cases: [
      { input: "10, 3", output: "7" },
      { input: "5, 10", output: "-5" },
      { input: "0, 0", output: "0" }
    ]
  },
  {
    title: "Multiply Two Numbers",
    description: `## Problem Description

Write a function \`solve(a, b)\` that returns the product of two numbers.

## Task

Your function should take two numbers and return their multiplication result. Multiplication is essential for scaling values and calculating areas, volumes, and more.

## Input

- \`a\`: A number (can be positive, negative, or zero)
- \`b\`: A number (can be positive, negative, or zero)

## Output

- Return the product of \`a\` and \`b\``,
    difficulty: "Easy",
    starter_code: "function solve(a, b) {\n  // your code here\n}",
    solution: "function solve(a, b) { return a * b; }",
    test_cases: [
      { input: "3, 4", output: "12" },
      { input: "-2, 5", output: "-10" },
      { input: "7, 0", output: "0" }
    ]
  },
  {
    title: "Divide Two Numbers",
    description: `## Problem Description

Write a function \`solve(a, b)\` that returns the quotient of two numbers.

## Task

Your function should divide the first number by the second and return the result. Division is used in many calculations including averages, ratios, and rates.

## Input

- \`a\`: A number (dividend)
- \`b\`: A non-zero number (divisor)

## Output

- Return \`a / b\``,
    difficulty: "Easy",
    starter_code: "function solve(a, b) {\n  // your code here\n}",
    solution: "function solve(a, b) { return a / b; }",
    test_cases: [
      { input: "10, 2", output: "5" },
      { input: "15, 3", output: "5" },
      { input: "7, 2", output: "3.5" }
    ]
  },
  {
    title: "Check Even or Odd",
    description: `## Problem Description

Write a function \`solve(num)\` that checks if a number is even or odd.

## Task

Your function should return "Even" if the number is divisible by 2, and "Odd" otherwise. This is a common check used in many algorithms and patterns.

## Input

- \`num\`: An integer (can be positive, negative, or zero)

## Output

- Return "Even" if divisible by 2, "Odd" otherwise`,
    difficulty: "Easy",
    starter_code: "function solve(num) {\n  // your code here\n}",
    solution: "function solve(num) { return num % 2 === 0 ? 'Even' : 'Odd'; }",
    test_cases: [
      { input: "4", output: "'Even'" },
      { input: "7", output: "'Odd'" },
      { input: "0", output: "'Even'" }
    ]
  },
  {
    title: "Get Array Length",
    description: `## Problem Description

Write a function \`solve(arr)\` that returns the length of an array.

## Task

Your function should take an array and return the number of elements it contains. Understanding array length is fundamental for iteration and data processing.

## Input

- \`arr\`: An array (can be empty or contain any elements)

## Output

- Return the number of elements in the array`,
    difficulty: "Easy",
    starter_code: "function solve(arr) {\n  // your code here\n}",
    solution: "function solve(arr) { return arr.length; }",
    test_cases: [
      { input: "[1, 2, 3, 4, 5]", output: "5" },
      { input: "['a', 'b', 'c']", output: "3" },
      { input: "[]", output: "0" }
    ]
  },
  {
    title: "Get First Element",
    description: `## Problem Description

Write a function \`solve(arr)\` that returns the first element of an array.

## Task

Your function should return the first element of the array. Accessing array elements by index is a fundamental operation in programming.

## Input

- \`arr\`: A non-empty array

## Output

- Return the first element of the array`,
    difficulty: "Easy",
    starter_code: "function solve(arr) {\n  // your code here\n}",
    solution: "function solve(arr) { return arr[0]; }",
    test_cases: [
      { input: "[1, 2, 3]", output: "1" },
      { input: "['hello', 'world']", output: "'hello'" },
      { input: "[42]", output: "42" }
    ]
  },
  {
    title: "Get Last Element",
    description: `## Problem Description

Write a function \`solve(arr)\` that returns the last element of an array.

## Task

Your function should return the last element of the array. This is commonly used when you need to access the most recently added item.

## Input

- \`arr\`: A non-empty array

## Output

- Return the last element of the array`,
    difficulty: "Easy",
    starter_code: "function solve(arr) {\n  // your code here\n}",
    solution: "function solve(arr) { return arr[arr.length - 1]; }",
    test_cases: [
      { input: "[1, 2, 3]", output: "3" },
      { input: "['a', 'b', 'c']", output: "'c'" },
      { input: "[100]", output: "100" }
    ]
  },
  {
    title: "Check Positive Number",
    description: `## Problem Description

Write a function \`solve(num)\` that checks if a number is positive.

## Task

Your function should return true if the number is greater than 0, and false otherwise. This is useful for validation and conditional logic.

## Input

- \`num\`: A number (can be positive, negative, or zero)

## Output

- Return true if \`num > 0\`, false otherwise`,
    difficulty: "Easy",
    starter_code: "function solve(num) {\n  // your code here\n}",
    solution: "function solve(num) { return num > 0; }",
    test_cases: [
      { input: "5", output: "true" },
      { input: "-3", output: "false" },
      { input: "0", output: "false" }
    ]
  },
  {
    title: "Square a Number",
    description: `## Problem Description

Write a function \`solve(num)\` that returns the square of a number.

## Task

Your function should multiply the number by itself and return the result. Squaring is used in geometry, physics, and many mathematical formulas.

## Input

- \`num\`: A number

## Output

- Return \`num * num\``,
    difficulty: "Easy",
    starter_code: "function solve(num) {\n  // your code here\n}",
    solution: "function solve(num) { return num * num; }",
    test_cases: [
      { input: "4", output: "16" },
      { input: "-3", output: "9" },
      { input: "0", output: "0" }
    ]
  },
  {
    title: "Concatenate Two Strings",
    description: `## Problem Description

Write a function \`solve(str1, str2)\` that concatenates two strings.

## Task

Your function should combine two strings into one, with the second string appended to the first. String concatenation is a common operation in text processing.

## Input

- \`str1\`: A string
- \`str2\`: A string

## Output

- Return the concatenation of \`str1\` and \`str2\``,
    difficulty: "Easy",
    starter_code: "function solve(str1, str2) {\n  // your code here\n}",
    solution: "function solve(str1, str2) { return str1 + str2; }",
    test_cases: [
      { input: "'hello', 'world'", output: "'helloworld'" },
      { input: "'foo', 'bar'", output: "'foobar'" },
      { input: "'', 'test'", output: "'test'" }
    ]
  },
  {
    title: "Get String Length",
    description: `## Problem Description

Write a function \`solve(str)\` that returns the length of a string.

## Task

Your function should return the number of characters in the string. This is useful for validation, formatting, and text processing.

## Input

- \`str\`: A string (can be empty)

## Output

- Return the number of characters in the string`,
    difficulty: "Easy",
    starter_code: "function solve(str) {\n  // your code here\n}",
    solution: "function solve(str) { return str.length; }",
    test_cases: [
      { input: "'hello'", output: "5" },
      { input: "'test'", output: "4" },
      { input: "''", output: "0" }
    ]
  },
  {
    title: "Convert to Uppercase",
    description: `## Problem Description

Write a function \`solve(str)\` that converts a string to uppercase.

## Task

Your function should return the string with all alphabetic characters converted to uppercase. This is commonly used for normalization and comparison.

## Input

- \`str\`: A string

## Output

- Return the uppercase version of the string`,
    difficulty: "Easy",
    starter_code: "function solve(str) {\n  // your code here\n}",
    solution: "function solve(str) { return str.toUpperCase(); }",
    test_cases: [
      { input: "'hello'", output: "'HELLO'" },
      { input: "'World'", output: "'WORLD'" },
      { input: "'test123'", output: "'TEST123'" }
    ]
  },
  {
    title: "Convert to Lowercase",
    description: `## Problem Description

Write a function \`solve(str)\` that converts a string to lowercase.

## Task

Your function should return the string with all alphabetic characters converted to lowercase. This is useful for case-insensitive comparisons.

## Input

- \`str\`: A string

## Output

- Return the lowercase version of the string`,
    difficulty: "Easy",
    starter_code: "function solve(str) {\n  // your code here\n}",
    solution: "function solve(str) { return str.toLowerCase(); }",
    test_cases: [
      { input: "'HELLO'", output: "'hello'" },
      { input: "'World'", output: "'world'" },
      { input: "'TEST123'", output: "'test123'" }
    ]
  },
  {
    title: "Absolute Value",
    description: `## Problem Description

Write a function \`solve(num)\` that returns the absolute value of a number.

## Task

Your function should return the non-negative value of the number, regardless of its sign. Absolute value is used in distance calculations and many mathematical operations.

## Input

- \`num\`: A number (can be positive, negative, or zero)

## Output

- Return the absolute value of \`num\``,
    difficulty: "Easy",
    starter_code: "function solve(num) {\n  // your code here\n}",
    solution: "function solve(num) { return Math.abs(num); }",
    test_cases: [
      { input: "5", output: "5" },
      { input: "-10", output: "10" },
      { input: "0", output: "0" }
    ]
  },

  // ==================== MEDIUM PROBLEMS (15) ====================
  {
    title: "Find Maximum",
    description: `## Problem Description

Write a function \`solve(arr)\` that returns the maximum number in an array.

## Task

Your function should take an array of numbers and return the largest value. Finding the maximum value is a common operation in data processing and algorithm design.

## Input

- \`arr\`: An array of numbers (can be positive, negative, or zero)
- The array will always contain at least one element

## Output

- Return the maximum number in the array`,
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
    title: "Find Minimum",
    description: `## Problem Description

Write a function \`solve(arr)\` that returns the minimum number in an array.

## Task

Your function should take an array of numbers and return the smallest value. Finding the minimum is essential for optimization problems and data analysis.

## Input

- \`arr\`: An array of numbers (can be positive, negative, or zero)
- The array will always contain at least one element

## Output

- Return the minimum number in the array`,
    difficulty: "Medium",
    starter_code: "function solve(arr) {\n  // your code here\n}",
    solution: "function solve(arr) { return Math.min(...arr); }",
    test_cases: [
      { input: "[1, 3, 2]", output: "1" },
      { input: "[-5, -1, -10]", output: "-10" },
      { input: "[42]", output: "42" }
    ]
  },
  {
    title: "Sum Array Elements",
    description: `## Problem Description

Write a function \`solve(arr)\` that returns the sum of all elements in an array.

## Task

Your function should iterate through the array and calculate the sum of all numbers. This is a fundamental operation used in statistics, averages, and many algorithms.

## Input

- \`arr\`: An array of numbers (can be empty)

## Output

- Return the sum of all elements in the array`,
    difficulty: "Medium",
    starter_code: "function solve(arr) {\n  // your code here\n}",
    solution: "function solve(arr) { return arr.reduce((sum, num) => sum + num, 0); }",
    test_cases: [
      { input: "[1, 2, 3, 4, 5]", output: "15" },
      { input: "[-1, -2, -3]", output: "-6" },
      { input: "[]", output: "0" }
    ]
  },
  {
    title: "Filter Even Numbers",
    description: `## Problem Description

Write a function \`solve(arr)\` that returns only the even numbers from an array.

## Task

Your function should filter the array to include only even numbers (divisible by 2). Filtering is a common operation in data processing and transformation.

## Input

- \`arr\`: An array of integers

## Output

- Return an array containing only the even numbers`,
    difficulty: "Medium",
    starter_code: "function solve(arr) {\n  // your code here\n}",
    solution: "function solve(arr) { return arr.filter(num => num % 2 === 0); }",
    test_cases: [
      { input: "[1, 2, 3, 4, 5, 6]", output: "[2, 4, 6]" },
      { input: "[1, 3, 5]", output: "[]" },
      { input: "[2, 4, 6]", output: "[2, 4, 6]" }
    ]
  },
  {
    title: "Filter Odd Numbers",
    description: `## Problem Description

Write a function \`solve(arr)\` that returns only the odd numbers from an array.

## Task

Your function should filter the array to include only odd numbers (not divisible by 2). This pattern is used in many algorithms and data processing tasks.

## Input

- \`arr\`: An array of integers

## Output

- Return an array containing only the odd numbers`,
    difficulty: "Medium",
    starter_code: "function solve(arr) {\n  // your code here\n}",
    solution: "function solve(arr) { return arr.filter(num => num % 2 !== 0); }",
    test_cases: [
      { input: "[1, 2, 3, 4, 5, 6]", output: "[1, 3, 5]" },
      { input: "[2, 4, 6]", output: "[]" },
      { input: "[1, 3, 5]", output: "[1, 3, 5]" }
    ]
  },
  {
    title: "Double Array Elements",
    description: `## Problem Description

Write a function \`solve(arr)\` that returns a new array with each element doubled.

## Task

Your function should create a new array where each element is multiplied by 2. Mapping transformations are essential for data manipulation.

## Input

- \`arr\`: An array of numbers

## Output

- Return a new array with each element doubled`,
    difficulty: "Medium",
    starter_code: "function solve(arr) {\n  // your code here\n}",
    solution: "function solve(arr) { return arr.map(num => num * 2); }",
    test_cases: [
      { input: "[1, 2, 3]", output: "[2, 4, 6]" },
      { input: "[-1, 0, 5]", output: "[-2, 0, 10]" },
      { input: "[]", output: "[]" }
    ]
  },
  {
    title: "Square Array Elements",
    description: `## Problem Description

Write a function \`solve(arr)\` that returns a new array with each element squared.

## Task

Your function should create a new array where each element is raised to the power of 2. This is useful for various mathematical operations.

## Input

- \`arr\`: An array of numbers

## Output

- Return a new array with each element squared`,
    difficulty: "Medium",
    starter_code: "function solve(arr) {\n  // your code here\n}",
    solution: "function solve(arr) { return arr.map(num => num * num); }",
    test_cases: [
      { input: "[1, 2, 3]", output: "[1, 4, 9]" },
      { input: "[-2, 0, 3]", output: "[4, 0, 9]" },
      { input: "[]", output: "[]" }
    ]
  },
  {
    title: "Count Occurrences",
    description: `## Problem Description

Write a function \`solve(arr, target)\` that counts how many times a target value appears in an array.

## Task

Your function should iterate through the array and count occurrences of the target value. Counting is a fundamental operation in data analysis.

## Input

- \`arr\`: An array of values
- \`target\`: The value to count

## Output

- Return the number of times \`target\` appears in \`arr\``,
    difficulty: "Medium",
    starter_code: "function solve(arr, target) {\n  // your code here\n}",
    solution: "function solve(arr, target) { return arr.filter(item => item === target).length; }",
    test_cases: [
      { input: "[1, 2, 2, 3, 2], 2", output: "3" },
      { input: "['a', 'b', 'a', 'c'], 'a'", output: "2" },
      { input: "[1, 2, 3], 4", output: "0" }
    ]
  },
  {
    title: "Find Index",
    description: `## Problem Description

Write a function \`solve(arr, target)\` that returns the index of the first occurrence of a target value.

## Task

Your function should find and return the index of the first occurrence of the target. If not found, return -1. This is a common search operation.

## Input

- \`arr\`: An array
- \`target\`: The value to find

## Output

- Return the index of the first occurrence, or -1 if not found`,
    difficulty: "Medium",
    starter_code: "function solve(arr, target) {\n  // your code here\n}",
    solution: "function solve(arr, target) { return arr.indexOf(target); }",
    test_cases: [
      { input: "[1, 2, 3, 4], 3", output: "2" },
      { input: "['a', 'b', 'c'], 'b'", output: "1" },
      { input: "[1, 2, 3], 5", output: "-1" }
    ]
  },
  {
    title: "Remove Duplicates",
    description: `## Problem Description

Write a function \`solve(arr)\` that returns an array with duplicates removed.

## Task

Your function should remove duplicate values from the array, keeping only unique values. This is useful for data cleaning and set operations.

## Input

- \`arr\`: An array of values

## Output

- Return an array with only unique values`,
    difficulty: "Medium",
    starter_code: "function solve(arr) {\n  // your code here\n}",
    solution: "function solve(arr) { return [...new Set(arr)]; }",
    test_cases: [
      { input: "[1, 2, 2, 3, 3, 3]", output: "[1, 2, 3]" },
      { input: "['a', 'b', 'a', 'c']", output: "['a', 'b', 'c']" },
      { input: "[1, 2, 3]", output: "[1, 2, 3]" }
    ]
  },
  {
    title: "Reverse Array",
    description: `## Problem Description

Write a function \`solve(arr)\` that returns the array in reverse order.

## Task

Your function should return a new array with the elements in reverse order. Reversing arrays is useful for many algorithms and data transformations.

## Input

- \`arr\`: An array

## Output

- Return the array with elements in reverse order`,
    difficulty: "Medium",
    starter_code: "function solve(arr) {\n  // your code here\n}",
    solution: "function solve(arr) { return [...arr].reverse(); }",
    test_cases: [
      { input: "[1, 2, 3, 4]", output: "[4, 3, 2, 1]" },
      { input: "['a', 'b', 'c']", output: "['c', 'b', 'a']" },
      { input: "[]", output: "[]" }
    ]
  },
  {
    title: "Sort Array Ascending",
    description: `## Problem Description

Write a function \`solve(arr)\` that returns the array sorted in ascending order.

## Task

Your function should sort the array from smallest to largest. Sorting is a fundamental operation used in search, optimization, and data presentation.

## Input

- \`arr\`: An array of numbers

## Output

- Return the array sorted in ascending order`,
    difficulty: "Medium",
    starter_code: "function solve(arr) {\n  // your code here\n}",
    solution: "function solve(arr) { return [...arr].sort((a, b) => a - b); }",
    test_cases: [
      { input: "[3, 1, 4, 1, 5]", output: "[1, 1, 3, 4, 5]" },
      { input: "[-3, 0, 2, -1]", output: "[-3, -1, 0, 2]" },
      { input: "[]", output: "[]" }
    ]
  },
  {
    title: "Sort Array Descending",
    description: `## Problem Description

Write a function \`solve(arr)\` that returns the array sorted in descending order.

## Task

Your function should sort the array from largest to smallest. This is useful for rankings, leaderboards, and finding top values.

## Input

- \`arr\`: An array of numbers

## Output

- Return the array sorted in descending order`,
    difficulty: "Medium",
    starter_code: "function solve(arr) {\n  // your code here\n}",
    solution: "function solve(arr) { return [...arr].sort((a, b) => b - a); }",
    test_cases: [
      { input: "[3, 1, 4, 1, 5]", output: "[5, 4, 3, 1, 1]" },
      { input: "[-3, 0, 2, -1]", output: "[2, 0, -1, -3]" },
      { input: "[]", output: "[]" }
    ]
  },
  {
    title: "Check Palindrome",
    description: `## Problem Description

Write a function \`solve(str)\` that checks if a string is a palindrome.

## Task

Your function should return true if the string reads the same forwards and backwards, ignoring case. Palindromes are words or phrases that are symmetric.

## Input

- \`str\`: A string

## Output

- Return true if palindrome, false otherwise`,
    difficulty: "Medium",
    starter_code: "function solve(str) {\n  // your code here\n}",
    solution: "function solve(str) { const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, ''); return cleaned === cleaned.split('').reverse().join(''); }",
    test_cases: [
      { input: "'racecar'", output: "true" },
      { input: "'hello'", output: "false" },
      { input: "'A man a plan a canal Panama'", output: "true" }
    ]
  },
  {
    title: "Count Vowels",
    description: `## Problem Description

Write a function \`solve(str)\` that counts the number of vowels in a string.

## Task

Your function should count the vowels (a, e, i, o, u) in the string, ignoring case. Vowel counting is useful in text analysis and processing.

## Input

- \`str\`: A string

## Output

- Return the number of vowels in the string`,
    difficulty: "Medium",
    starter_code: "function solve(str) {\n  // your code here\n}",
    solution: "function solve(str) { return (str.match(/[aeiou]/gi) || []).length; }",
    test_cases: [
      { input: "'hello'", output: "2" },
      { input: "'AEIOU'", output: "5" },
      { input: "'xyz'", output: "0" }
    ]
  },

  // ==================== HARD PROBLEMS (15) ====================
  {
    title: "Reverse String",
    description: `## Problem Description

Write a function \`solve(str)\` that reverses a string.

## Task

Your function should take a string as input and return a new string with the characters in reverse order. String reversal is a classic programming problem with many real-world applications, including palindrome checking and text processing.

## Input

- \`str\`: A string (can be empty, contain spaces, or special characters)

## Output

- Return the reversed string`,
    difficulty: "Hard",
    starter_code: "function solve(str) {\n  // your code here\n}",
    solution: "function solve(str) { return str.split('').reverse().join(''); }",
    test_cases: [
      { input: "'hello'", output: "'olleh'" },
      { input: "'algo'", output: "'ogla'" },
      { input: "''", output: "''" }
    ]
  },
  {
    title: "Factorial",
    description: `## Problem Description

Write a function \`solve(n)\` that calculates the factorial of a non-negative integer.

## Task

Your function should return n! (n factorial), which is the product of all positive integers from 1 to n. By definition, 0! = 1. Factorials are used in permutations, combinations, and many mathematical formulas.

## Input

- \`n\`: A non-negative integer (0 ≤ n ≤ 12)

## Output

- Return the factorial of \`n\``,
    difficulty: "Hard",
    starter_code: "function solve(n) {\n  // your code here\n}",
    solution: "function solve(n) { if (n <= 1) return 1; return n * solve(n - 1); }",
    test_cases: [
      { input: "5", output: "120" },
      { input: "0", output: "1" },
      { input: "7", output: "5040" }
    ]
  },
  {
    title: "Fibonacci",
    description: `## Problem Description

Write a function \`solve(n)\` that returns the nth Fibonacci number.

## Task

Your function should return the nth number in the Fibonacci sequence, where F(0) = 0, F(1) = 1, and F(n) = F(n-1) + F(n-2) for n > 1. The Fibonacci sequence appears in nature and has many applications.

## Input

- \`n\`: A non-negative integer (0 ≤ n ≤ 30)

## Output

- Return the nth Fibonacci number`,
    difficulty: "Hard",
    starter_code: "function solve(n) {\n  // your code here\n}",
    solution: "function solve(n) { if (n <= 1) return n; return solve(n - 1) + solve(n - 2); }",
    test_cases: [
      { input: "0", output: "0" },
      { input: "5", output: "5" },
      { input: "10", output: "55" }
    ]
  },
  {
    title: "Check Prime",
    description: `## Problem Description

Write a function \`solve(n)\` that checks if a number is prime.

## Task

Your function should return true if the number is prime (greater than 1 and only divisible by 1 and itself), and false otherwise. Prime numbers are fundamental in number theory and cryptography.

## Input

- \`n\`: A positive integer (n ≥ 1)

## Output

- Return true if prime, false otherwise`,
    difficulty: "Hard",
    starter_code: "function solve(n) {\n  // your code here\n}",
    solution: "function solve(n) { if (n <= 1) return false; for (let i = 2; i <= Math.sqrt(n); i++) { if (n % i === 0) return false; } return true; }",
    test_cases: [
      { input: "7", output: "true" },
      { input: "4", output: "false" },
      { input: "2", output: "true" }
    ]
  },
  {
    title: "Greatest Common Divisor",
    description: `## Problem Description

Write a function \`solve(a, b)\` that returns the greatest common divisor of two numbers.

## Task

Your function should return the largest positive integer that divides both numbers without a remainder. The GCD is used in fraction simplification and many number theory algorithms.

## Input

- \`a\`: A positive integer
- \`b\`: A positive integer

## Output

- Return the GCD of \`a\` and \`b\``,
    difficulty: "Hard",
    starter_code: "function solve(a, b) {\n  // your code here\n}",
    solution: "function solve(a, b) { while (b !== 0) { let temp = b; b = a % b; a = temp; } return a; }",
    test_cases: [
      { input: "48, 18", output: "6" },
      { input: "17, 5", output: "1" },
      { input: "12, 12", output: "12" }
    ]
  },
  {
    title: "Power Function",
    description: `## Problem Description

Write a function \`solve(base, exp)\` that calculates base raised to the power of exp.

## Task

Your function should return base^exp without using Math.pow(). Implement the calculation manually. The exponent will be a non-negative integer.

## Input

- \`base\`: A number
- \`exp\`: A non-negative integer

## Output

- Return \`base\` raised to the power of \`exp\``,
    difficulty: "Hard",
    starter_code: "function solve(base, exp) {\n  // your code here\n}",
    solution: "function solve(base, exp) { let result = 1; for (let i = 0; i < exp; i++) { result *= base; } return result; }",
    test_cases: [
      { input: "2, 3", output: "8" },
      { input: "5, 0", output: "1" },
      { input: "3, 4", output: "81" }
    ]
  },
  {
    title: "Binary Search",
    description: `## Problem Description

Write a function \`solve(arr, target)\` that performs binary search on a sorted array.

## Task

Your function should return the index of the target value in the sorted array, or -1 if not found. Binary search is an efficient O(log n) search algorithm for sorted data.

## Input

- \`arr\`: A sorted array of numbers in ascending order
- \`target\`: The number to find

## Output

- Return the index of target, or -1 if not found`,
    difficulty: "Hard",
    starter_code: "function solve(arr, target) {\n  // your code here\n}",
    solution: "function solve(arr, target) { let left = 0, right = arr.length - 1; while (left <= right) { let mid = Math.floor((left + right) / 2); if (arr[mid] === target) return mid; if (arr[mid] < target) left = mid + 1; else right = mid - 1; } return -1; }",
    test_cases: [
      { input: "[1, 3, 5, 7, 9], 5", output: "2" },
      { input: "[1, 2, 3, 4, 5], 6", output: "-1" },
      { input: "[1], 1", output: "0" }
    ]
  },
  {
    title: "Bubble Sort",
    description: `## Problem Description

Write a function \`solve(arr)\` that sorts an array using bubble sort.

## Task

Your function should implement the bubble sort algorithm, which repeatedly steps through the list, compares adjacent elements, and swaps them if they're in the wrong order.

## Input

- \`arr\`: An array of numbers

## Output

- Return the array sorted in ascending order`,
    difficulty: "Hard",
    starter_code: "function solve(arr) {\n  // your code here\n}",
    solution: "function solve(arr) { let result = [...arr]; for (let i = 0; i < result.length; i++) { for (let j = 0; j < result.length - i - 1; j++) { if (result[j] > result[j + 1]) { [result[j], result[j + 1]] = [result[j + 1], result[j]]; } } } return result; }",
    test_cases: [
      { input: "[64, 34, 25, 12, 22]", output: "[12, 22, 25, 34, 64]" },
      { input: "[5, 1, 4, 2, 8]", output: "[1, 2, 4, 5, 8]" },
      { input: "[]", output: "[]" }
    ]
  },
  {
    title: "Anagram Check",
    description: `## Problem Description

Write a function \`solve(str1, str2)\` that checks if two strings are anagrams.

## Task

Your function should return true if the two strings are anagrams (contain the same characters in different order), ignoring case and spaces. Anagrams are words formed by rearranging letters of another word.

## Input

- \`str1\`: A string
- \`str2\`: A string

## Output

- Return true if anagrams, false otherwise`,
    difficulty: "Hard",
    starter_code: "function solve(str1, str2) {\n  // your code here\n}",
    solution: "function solve(str1, str2) { const normalize = str => str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join(''); return normalize(str1) === normalize(str2); }",
    test_cases: [
      { input: "'listen', 'silent'", output: "true" },
      { input: "'hello', 'world'", output: "false" },
      { input: "'Dormitory', 'Dirty room'", output: "true" }
    ]
  },
  {
    title: "Longest Word",
    description: `## Problem Description

Write a function \`solve(str)\` that returns the longest word in a string.

## Task

Your function should find and return the longest word in the string. Words are separated by spaces. If there are multiple words with the same maximum length, return the first one.

## Input

- \`str\`: A string containing words separated by spaces

## Output

- Return the longest word in the string`,
    difficulty: "Hard",
    starter_code: "function solve(str) {\n  // your code here\n}",
    solution: "function solve(str) { const words = str.split(' '); return words.reduce((longest, word) => word.length > longest.length ? word : longest, ''); }",
    test_cases: [
      { input: "'The quick brown fox'", output: "'quick'" },
      { input: "'hello world'", output: "'hello'" },
      { input: "'a bb ccc'", output: "'ccc'" }
    ]
  },
  {
    title: "Capitalize Words",
    description: `## Problem Description

Write a function \`solve(str)\` that capitalizes the first letter of each word in a string.

## Task

Your function should return the string with the first letter of each word capitalized. Words are separated by spaces.

## Input

- \`str\`: A string

## Output

- Return the string with each word's first letter capitalized`,
    difficulty: "Hard",
    starter_code: "function solve(str) {\n  // your code here\n}",
    solution: "function solve(str) { return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); }",
    test_cases: [
      { input: "'hello world'", output: "'Hello World'" },
      { input: "'the quick brown fox'", output: "'The Quick Brown Fox'" },
      { input: "'a b c'", output: "'A B C'" }
    ]
  },
  {
    title: "Remove Spaces",
    description: `## Problem Description

Write a function \`solve(str)\` that removes all spaces from a string.

## Task

Your function should return the string with all spaces removed. This is useful for text normalization and cleaning.

## Input

- \`str\`: A string

## Output

- Return the string without any spaces`,
    difficulty: "Hard",
    starter_code: "function solve(str) {\n  // your code here\n}",
    solution: "function solve(str) { return str.replace(/\\s/g, ''); }",
    test_cases: [
      { input: "'hello world'", output: "'helloworld'" },
      { input: "'a b c d'", output: "'abcd'" },
      { input: "'no spaces'", output: "'nospaces'" }
    ]
  },
  {
    title: "Flatten Array",
    description: `## Problem Description

Write a function \`solve(arr)\` that flattens a nested array.

## Task

Your function should take a nested array and return a flat array with all elements at the same level. Handle arrays nested to any depth.

## Input

- \`arr\`: A potentially nested array

## Output

- Return a flat array with all elements`,
    difficulty: "Hard",
    starter_code: "function solve(arr) {\n  // your code here\n}",
    solution: "function solve(arr) { return arr.flat(Infinity); }",
    test_cases: [
      { input: "[1, [2, [3, [4]], 5]]", output: "[1, 2, 3, 4, 5]" },
      { input: "[[1, 2], [3, 4]]", output: "[1, 2, 3, 4]" },
      { input: "[1, 2, 3]", output: "[1, 2, 3]" }
    ]
  },
  {
    title: "Find Missing Number",
    description: `## Problem Description

Write a function \`solve(arr)\` that finds the missing number in a sequence.

## Task

Given an array containing n distinct numbers from 0 to n, find the missing number. The array is not sorted and contains exactly one missing number.

## Input

- \`arr\`: An array of n distinct numbers from 0 to n (one number is missing)

## Output

- Return the missing number`,
    difficulty: "Hard",
    starter_code: "function solve(arr) {\n  // your code here\n}",
    solution: "function solve(arr) { const n = arr.length; const expectedSum = n * (n + 1) / 2; const actualSum = arr.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; }",
    test_cases: [
      { input: "[0, 1, 3]", output: "2" },
      { input: "[1, 2, 3, 4, 6]", output: "5" },
      { input: "[0]", output: "1" }
    ]
  },
  {
    title: "Two Sum",
    description: `## Problem Description

Write a function \`solve(arr, target)\` that finds two numbers that add up to a target.

## Task

Given an array of numbers, find indices of two numbers that add up to the target. You may assume that each input has exactly one solution, and you cannot use the same element twice.

## Input

- \`arr\`: An array of numbers
- \`target\`: The target sum

## Output

- Return an array with the two indices`,
    difficulty: "Hard",
    starter_code: "function solve(arr, target) {\n  // your code here\n}",
    solution: "function solve(arr, target) { const map = new Map(); for (let i = 0; i < arr.length; i++) { const complement = target - arr[i]; if (map.has(complement)) { return [map.get(complement), i]; } map.set(arr[i], i); } return []; }",
    test_cases: [
      { input: "[2, 7, 11, 15], 9", output: "[0, 1]" },
      { input: "[3, 2, 4], 6", output: "[1, 2]" },
      { input: "[3, 3], 6", output: "[0, 1]" }
    ]
  }
];
