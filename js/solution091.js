// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

//P: a string
//R: the string with each character repeated once
//E:
//P:

//SUBMITTED
function doubleChar(str) {
  // split method to make str into an array
  const newArray = str.split('');
  const newArrayMap = newArray.map(x=> x + x);
  const newArrayJoin = newArrayMap.join('')
}

//ONE LINER
//doubleChar = str => str.split('').map(x => x + x).join('')
