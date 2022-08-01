// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//P: a non empty array of integers
//R: the result of multiplying the values in order 
//E:
//P:

function grow(x){
  return x.reduce((prev, curr) => prev * curr);

}

console.log(grow([1, 2, 4, 5]))//40
console.log(grow([2, 2, 2, 2]))//16
console.log(grow([3, 3, 3, 3,]))//81