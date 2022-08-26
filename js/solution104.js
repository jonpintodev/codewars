// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//P: a string of numbers that are valid Int32
//R: a string with highest and lowest nums separated by a space. Highest number first.
//E:
//P:


//SUBMITTED
function highAndLow(numbers){
  //use .split method to create an array and .map method to make the elements into Numbers
  split = numbers.split(' ').map(Number);
  //use template literal to get the highest and lowest number as a string
  //spread syntax(...) use to give us 1 space between the values
  return `${Math.max(...split)} ${Math.min(...split)}`
}


//ONE LINER
// const highAndLow = numbers => (split = numbers.split(' ').map(Number), `${Math.max(...split)} ${Math.min(...split)}`)

console.log(highAndLow('1 2 -3 4 5'))//'5 -3'
console.log(highAndLow('2 4 6 8 10'))//'10 2'
console.log(highAndLow('4 2 7 4 -8 99'))//'99 -8'