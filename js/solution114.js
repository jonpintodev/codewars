// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

//P: a positive integer
//R: all the powers of 2 ranging from 0 to n
//E:
//P:

function powersOfTwo(n){
  //create an empty array
  let array = []
  //loop to create the elements from 0 to n
  for (let i = 0; i <= n; i++) {
    //.push() to multiply each element by 2
    array.push(Math.pow(2, i))
  }
  return array
}