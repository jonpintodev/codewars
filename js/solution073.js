// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

//P: a random positive integer
//R:
//E:
//P:

function digitize(n) {
  //String constructor to turn n into string use .split method to turn n into an array and .reverse method to reverse the array in place. Number constructor to make strings back into numbers
  return String(n).split('').reverse().map(x => Number(x))
}