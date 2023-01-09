// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Example:    
// 5.5589 is rounded 5.56   
// 3.3424 is rounded 3.34

// num with 4 decimal places
// num rounded to 2 decimal places

// function twoDecimalPlaces(n) {
//   //use .toFixed(2) to round to the second decimal. Wrap in Number to make string into a number
//   return Number(n.toFixed(2))
// }

//ONE LINER
const twoDecimalPlaces = n => Number(n.toFixed(2))

console.log(twoDecimalPlaces(5.5589), 5.56)
console.log(twoDecimalPlaces(3.3424), 3.34)