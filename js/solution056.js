// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//P: a number
//R: num multiplied by 8 if divisible by 2, or multiplied by 9 otherwise
//E:
//P:

function simpleMultiplication(number) {
  // conditional that checks if number is divisible by 2
  if (number % 2) {
    return (number * 9)
  } else {
    return (number * 8)
  }
}

console.log(simpleMultiplication(2))//16
console.log(simpleMultiplication(1))//9
console.log(simpleMultiplication(4))//32