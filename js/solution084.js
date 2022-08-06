// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

//P: array of integers can be positive/negative, empty array, or array with one element.
//R: sum of all the values in the array excluding the highest and lowest value. If only 1 element in the array or an empty array, return 0
//E:
//P:


//SUBMITTED
function sumArray(array) {
//conditional to check for empty array or array with 1 value
  if (!array) {
    return 0
  } else {
//use .sort method to sort the array in value order
    const sortedArray = array.sort((a, b) => a - b);
//use .slice method to exclude the first value in the array and the last value
    const newArray = orderedArray.slice(1, -1);
//use .reduce method to sum the remaining values in the array
    return newArray.reduce((prev, curr) => prev + curr, 0)
  }
}

//ONE LINER!

// sumArray = array => array ? array.sort((a, b) => a - b).slice(1, -1).reduce((prev, curr) => prev + curr, 0) : 0