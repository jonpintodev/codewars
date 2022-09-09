// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

//P: an array of integers
//R: the square root of each integer, if no square root then square the number 
//E:
//P:

function squareOrSquareRoot(array) {
  //.map to check each element in the array
  //Math.sqrt to get the square root of the element
  // Modulus (%) to check for a remainder
  //ternary operator to square the number if there is a remainder when we find the square root
  return array.map(x => Math.sqrt(x) % 1 ? x * x : Math.sqrt(x));  
}