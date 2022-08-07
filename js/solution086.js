// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//P:
//R:
//E:
//P:

function sumMix(x){
  //use .map method to make a strings in array a number
  const sumArray = x.map(str => {
    return Number(str);
  })
  //use .reduce to sum all the values
  return sumArray.reduce((prev, curr) => prev + curr);
}

