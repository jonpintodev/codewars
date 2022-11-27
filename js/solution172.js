// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

//a positive integer (n) >= 1
//an arr of numbers from 1 - (n)

function preFizz(n) {
  //empty array 
  let arr = [];
  //starting num
  let num = 1;
  //while loop to push elements to the new array
  while(arr.length  < n){
    arr.push(num);
    num += 1;
  }
  return arr;
}

console.log(preFizz(3), 3)
console.log(preFizz(8), 8)
console.log(preFizz(12), 12)