// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

//P: a string
//R: the string in reverse
//E:
//P:

function reverseWords(str){
  //use .split() .reverse() .join() array methods
  return str.split(' ').reverse().join(' ');
}

console.log(reverseWords('Hello World'))//'World Hello'
console.log(reverseWords('All rights reserved'))//'reserved rights All'
console.log(reverseWords('Good to go'))//'go to Good'