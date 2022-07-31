3// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

//P: an array of numbers both positive and negative or an empty array
//R: the sum of all the numbers in the array or 0 if array is empty
//E:
//P:

// Sum Numbers
function sum (numbers) {
  return numbers.reduce((prev, curr) => prev + curr, 0);
};

console.log(sum([1, 2.5, -1, 3]))//5.5
console.log(sum([]))//0
console.log(sum([5, 10, 20, -15, 10]))//30