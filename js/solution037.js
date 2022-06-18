// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

//P: an array of numbers or strings and a value that is either a number or a string
//R: return true if the array contains the value of x
//E:
//P:

function check(a, x) {
  //use method to check for x in a array
  return a.includes(x);
}

console.log(check([5, 'hello', 88, 'wow'], 'wow'))//true
console.log(check(['yes', 'water', 9], 'no'))//false
console.log(check([1, 2, 3, 4, 'soon'], 2))//true