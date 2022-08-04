// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

//P: two array of integers
//R: the sum of all the elements in the arrays
//E:
//P:

function arrayPlusArray(arr1, arr2) {
  const sumOfArray1 = arr1.reduce((prev, curr) => prev + curr);
  const sumOfArray2 = arr2.reduce((prev, curr) => prev + curr);
  return sumOfArray1 + sumOfArray2
}


console.log(arrayPlusArray([1, 2, 3], [1, 2, 3]))//12
console.log(arrayPlusArray([1, 1, 1], [1, 1, 1]))//6
console.log(arrayPlusArray([2, 2, 2], [1, 1, 3]))//11