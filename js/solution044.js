// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//P: an array of integers
//R: a new array with each value doubled
//E:
//P:

// function maps(x){
//   //new variable that uses the map method to multiple each integer in the array by 2
//   const newMaps = x.map(x => x * 2);
//   return newMaps;
// }

// BETTER
const maps = x => x.map(x => x * 2)

console.log(maps([2, 4, 6,]))//[4, 8, 12]
console.log(maps([1, 1, 5]))//[2, 2, 10]
console.log(maps([10, 10, 10]))//[20, 20, 20]