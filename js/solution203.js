// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

// Example:
// calculator(1,2,"+"); //=> result will be 3
// calculator(1,2,"&"); //=> result will be "unknown value"
// calculator(1,"k","*"); //=> result will be "unknown value"
// Good luck!

// two numbers and a sign indicating a math operation to perform
// the answer to the math problem if two numbers and a symbol isn't used return "unknown value"

// function calculator(a,b,sign){

// }

calculator = (a, b, sign) =>
     typeof a == 'number'
  && typeof b == 'number'
  && ['+', '-', '*', '/'].includes(sign) ? sign == '+' ? a + b : sign == '-' ? a - b : sign == '*' ? a * b : a / b : 'unknown value'

console.log(calculator(2, 2, '+'), 4)
console.log(calculator(4, 6, '&'), 'unknown value')
console.log(calculator(5, 5, '*'), 25)