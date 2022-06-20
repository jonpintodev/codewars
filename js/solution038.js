// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//P: an array of numbers
//R: the average of the numbers in the array
//E:
//P:

function find_average(array) {
  //use reduce method to add all the numbers in the array and then use length method to divide by length of array
  const sumOfArray = array.reduce((acc, c)=> acc + c, 0);
  if (array.length == 0){
    return 0
  }else{
    return sumOfArray / array.length
  }
}

console.log(find_average([2, 4, 6, 8, 10]))//6
console.log(find_average([1, 1, 1, 1, 1]))//1
console.log(find_average([10, 20 , 15, 15, 10]))//14
