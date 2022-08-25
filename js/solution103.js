// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 9 squared is 81 and 1 squared is 1.

// Note: The function accepts an integer and returns an integer

//P: a set of numbers
//R: each individual number squared and concatenated
//E:
//P:

function squareDigits(num){
  //turn number into a string
  let string = num.toString();
  //create an array to save the new values
  let results = [];
  //loop to iterate through the array
  for (let i = 0; i < string.length; i++) {
  //save the square of the number to the array
    results[i] = string[i] * string[i];
  }
  //turn the array into a string and then into a number
  return Number(results.join(''));
}

console.log(squareDigits(123))//149
console.log(squareDigits(555))//252525
console.log(squareDigits(792))//49814