// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

//P: an integer
//R: true if n is even false otherwise
//E:
//P:

function testEven(n) {
  return (n % 2  == 0)
}

console.log(testEven(4))//true
console.log(testEven(99))//false
console.log(testEven(48))//true