// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

//an array of numbers with duplicates
//return the duplicates


function distinct(a) {
  //use Set object 
  return [...new Set(a)];
}

console.log(distinct([1, 2, 2, 3, 3, 3, 4]), [1, 2, 3, 4])