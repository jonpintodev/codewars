// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

//a string, always a string
//return the string with an exclamation removed from the end

// function remove (string) {
//   //coding and coding....
//   return '';
// }

remove = string => string.replace(/\!$/, '')