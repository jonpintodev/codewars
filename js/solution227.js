// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

function getNumberFromString(s) {
  // use + to convert to Number
  //.replace & regex(/\D/g) removes every element from the string that is not a digit
  return +s.replace(/\D/g, '');
}