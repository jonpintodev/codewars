// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

//a string with words seperated by a space
//the string with the length of the string at the end

// function addLength(str) {
//   //turn the string in an array -> map to use a function on every element in the array
//   return str.split(' ').map((str) => `${str} ${str.length}`)
// }

//ONE LINER
const addLength = str => str.split(' ').map((str) => `${str} ${str.length}`)

console.log(addLength('apple dog cat banana'), ['apple 5', 'dog 3', 'cat 3', 'banana 7'])
  