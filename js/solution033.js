// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

//P: either +, -, *, or / operator and two numbers
//R: return the answer to the equation from parameters
//E:
//P:

function basicOp(operation, value1, value2){
  //conditional that checks for each operator and performs the operation 
  if (operation === '+') {
    return value1 + value2;
  }else if (operation === '-'){
    return value1 - value2;
  }else if (operation === '*'){
    return value1 * value2;
  }else{
    return value1 / value2;
  }
}

console.log(basicOp('-', 3, 1))//2
console.log(basicOp('*', 5, 2))//10
console.log(basicOp('+', 4, 16))//20