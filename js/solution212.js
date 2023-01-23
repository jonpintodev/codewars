Description:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"

//a string with exclamation marks
//remove all but the last exclamation mark

function remove (string) {
  return string.split('!').join('').concat('!');
}

console.log(remove("Hi!"), "Hi!")
console.log(remove("Hi!!!"), "Hi!")
console.log(remove("!Hi"), "Hi!")
console.log(remove("!Hi!"), "Hi!")
console.log(remove("Hi! Hi!"), "Hi Hi!")
console.log(remove("Hi"), "Hi!")