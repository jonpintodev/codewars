// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

//P: two integers
//R: the numbers that divisible by the divisor
//E:
//P:

divisibleBy = (numbers, divisor) => numbers.filter(x => x % divisor == 0)

console.log(divisibleBy([1, 4, 5, 6, 7], 2))//[4, 6]
console.log(divisibleBy([3, 6, 7, 9, 12], 3))//[3, 6, 9, 12]
console.log(divisibleBy([4, 10, 20, 30], 10))//[10, 20, 30]

