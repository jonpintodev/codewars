// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

//P: a string 
//R: return the string but as an array or words
//E: 
//P:

function stringToArray(string){
  return string.split(' ')

}

console.log(stringToArray('Hello World')) // ['Hello', 'World']
console.log(stringToArray('It is sunny today'))//['It', 'is', 'sunny', 'today']
console.log(stringToArray('My name is Jon'))//['My', 'name', 'is', 'Jon']