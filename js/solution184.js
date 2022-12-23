// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

// Examples:
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)

// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)

// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)

// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your language)

//two integers (n, m)
//remainder of dividing the larger number by the smaller number


// function remainder(n, m){
//   if (n > m){
//     return n % m
//   } else if (n < m) {
//     return m % n
//   }else{
//     return NaN
//   }
// }

//ONE LINER

const remainder = (n , m) => n > m ? n % m : m % n

console.log(remainder(17, 5), 2)
console.log(remainder(13, 72), 7)
console.log(remainder(0, -1), 0)
console.log(remainder(0, 1), NaN)