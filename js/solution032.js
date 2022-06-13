// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5


//P: 3 numbers, always positive, never zero
//R: if n is divisible by x and y
//E:
//P:

function isDivisible(n, x, y) {
  //ternary operator that divides n by x and then y if there is no remainder return true otherwise return false
  return (n % x === 0 && n % y === 0) ? true : false;
}
console.log(isDivisible(10, 2, 5,))//True
console.log(isDivisible(9, 3, 8))//False
console.log(isDivisible(12, 3, 6))//True