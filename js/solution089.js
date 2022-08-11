// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//P: a string 
//R: the remove without exclamation points
//E:
//P:

//SUBMITTED
function removeExclamationMarks(s) {
  //use .replace method to replace the ! with nothing using regex
  return s.replace(/\!/g, '');
}

console.log(removeExclamationMarks("Hello World!"))//"Hello World"
console.log(removeExclamationMarks("What!"))//"What"
console.log(removeExclamationMarks("You! There!"))//"You There"

//ONE LINER
// removeExclamationMarks = s => s.replace(/\!/g, '')