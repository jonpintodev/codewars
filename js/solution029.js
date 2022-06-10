// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

//P: will be a number either negative or positve
//R: if the number is positive, return the negative of that number. if it is negative return the negative number
//E:
//P:

function makeNegative(num) {
  //create a conditional that checks for positive number
  if (num > 0 ){
    //set my condition to multiply num by -1 if it is positive thus making it negative
    return (num * -1)  
    //else statement returning num if it was originally negative
    }else{
      return num
    }
}
console.log(makeNegative(8))//-8
console.log(makeNegative(-3))//-3
console.log(makeNegative(5))//-5