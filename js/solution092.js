// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

//P: an integer that represents the speed in km per hour of a cockroach
//R: return that figure in cm per second rounded down to the whole integer
//E:
//P:

function cockroachSpeed(s) {
  //variable that holds centimeters per second
  const speedInCMPS = s * 27.7778;
  // math.floor() method to round the integer down
  return Math.floor(speedInCMPS)
}

console.log(cockroachSpeed(1.08))//30
console.log(cockroachSpeed(2.4))//66
console.log(cockroachSpeed(.9 ))//25
