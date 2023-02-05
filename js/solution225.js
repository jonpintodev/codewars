// Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

// You can assume the input will always be a number.

function validateCode (code) {
  //
  let codeStr = code + "";
  let regex = /^[123]/;
  return regex.test(codeStr);
}

console.log(validateCode([1, 4, 5, 6, 7]), true)
console.log(validateCode([5, 5, 4, 3]), false)
console.log(validateCode([3, 4, 5, 6, 7]), true)
