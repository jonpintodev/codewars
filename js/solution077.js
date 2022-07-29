// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

//P: a positive integer
//R: the sequence of numbers from n to 1 in an array
//E:
//P:

const reverseSeq = n => [...Array(n)].map((x, i) => n - i);

console.log(reverseSeq([3]))//[3,2,1]
console.log(reverseSeq([10]))//[10,9,8,7,6,5,4,3,2,1]
console.log(reverseSeq([7]))//[7,6,5,4,3,2,1]