// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.


//function using .replace() method that needs to replace all "." with "-"
//a working function

// var replaceDots = function(str) {
//   return str.replace(/./, '-');
// }

var replaceDots = function(str) {
  return str.replace(/\./g, '-');
}