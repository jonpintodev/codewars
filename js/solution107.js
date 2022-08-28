// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

//P: a string consisting of one word
//R: the middle character of the word if the length is odd and the two middle characters if even
//E:
//P:

function getMiddle(s) {
  let length = s.length
  //conditional to return the character for strings with 1 character
  if (length < 2) {
    return s
  }
  //condition to check if string is even
  if (length % 2) {
    //loop to iterate through the string
    for (let i = 0; i < length; i++) {
      //checks if amount of characters in string is odd 
      if (i == (length - 1) / 2) {
        //if odd returns the character who's index is length - 1 and / 2 (the middle character in the string)
        return s[i]
      }
    }
  } else {
    //same loop to iterate through the string
    for (let i = 0; i < length; i++) {
      //checks if amount of characters in the string is even
      if (i == (length) / 2) {
        //returns the index of the two middle characters. One who's index is length / 2 and - 1 AND another who's index is length / 2.
        return s[i - 1] + s[i]
      }
    }
  }
}

console.log(getMiddle('hello'))//'l'
console.log(getMiddle('wow'))//'o
console.log(getMiddle('eleven'))//'ev'

//SUBMITTED ONE LINER

//.splice
const getMiddle = s => s.slice((s.length - 1) / 2, s.length /2 + 1)