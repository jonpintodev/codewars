// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

//P: an array of positive or negative numbers
//R: the inverse of each (pos becomes neg and vice versa)
//E:
//P:

//use the map method to multiply each element by that numbers inverse
const invert = array => array.map(x => -x)

console.log(invert([1, 2, -2, 3]))//[-1, -2, 2, -3]
console.log(invert([-5, 5, 20, -3]))//[5, -5, -20, 3]
console.log(invert([-4, -1, -10, 99]))//[4, 1, 10, -99]