// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

//P: a positive integer greater than 0
//R: the sum of every number from 1 to the parameter (num)
//E:
//P:

var summation = function (num) {
  return num * (num + 1) / 2
}