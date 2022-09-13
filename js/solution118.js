// Write a function that checks if a given string (case insensitive) is a palindrome.

//P: a string
//R: true if x is a palindrome, false if no
//E:
//P:

function isPalindrome(x) {
  //.toLowerCase() to make each character in the string the same
  // compare the string to the reversed string
  //.toLowerCase to make each character the same case
  //.split('') to seperate each character by character
  //.reverse() to reverse the elements in the array
  //.join('') to join the reversed array back into a string
  return x.toLowerCase() == x.toLowerCase().split('').reverse().join('')
}

console.log(isPalindrome('wow'))//true
console.lol(isPalindome('hello'))//false
console.log(isPalindrome('mom'))//true