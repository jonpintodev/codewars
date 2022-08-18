// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

//P: a number (n)
//R: the number of positive numbers below n
//E:
//P:

//DID NOT WORK
// function oddCount(n){
//   //create an empty array
//   x = []
//   //loop to iterate through the array
//   for (let i = 0; i < n; i++) {
//   //pushes the odd numbers into the array
//     if (i < n && i  % 2 !== 0) {
//       x.push(i)
//     }
//   }
//   //returns the amount of elements in the array
//   return x.length
// }

console.log(oddCount(7))//3
console.log(oddCount(15))//7
console.log(oddcount(3))//1

//BETTER SUBMITTED
function oddCount(n) {
  //halves the parameter and rounds down to nearest whole number
  return Math.floor(n/2)
}