// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

//a string
//return string with all exclamation marks removed

// function remove (string) {
//   //use .replace() method with regex ( + for more than 1 ! and $ means only at end of string)
//   return string.replace(/!+$/, '')
// }

//ONE LINER
remove = string => string.replace(/!+$/, '')

console.log(remove('Hi!'), 'Hi')
console.log(remove('!Hi!!!!'), '!Hi')
console.log(remove('!!!Hi!!!!!!!!'), '!!!Hi')