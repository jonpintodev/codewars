// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

//P: a string where the first character is always a number
//R: the number value of the first character as a number not a string
//E:
//P:

function getAge(inputString){
  //use the 0 index to return the first element in the array. Wrap in Number
  return Number(inputString[0])

}

console.log(getAge('5 years old'))//5
console.log(getAge('3 years old'))//3
console.log(getAge('12 years old'))//12