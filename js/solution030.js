// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
// 123 --> "123"
// 999 --> "999"

//P: a number
//R: that number into a string
//E:
//P:

//SUBMITTED SOLUTION
function numberToString(num) {
  //use a method to change num to a string
  const str = num.toString();
  return str
}

//BETTER SOLUTION (ONE LINER)
//const numberToString = num => num.toString();




console.log(numberToString(989))//"989"
console.log(numberToString(11894))//"11894"
console.log(numberToString(12345))//"12345"