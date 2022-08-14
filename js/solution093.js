// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

//P: a str with either green, yellow, or red as the string
//R: a str representing which state(color) the light should change to
//E:
//P:

function updateLight(current) {
  //use an object initializer
  return ({green: 'yellow', yellow: 'red', red: 'green'})[current]
}

console.log(updateLight(green))//yellow
console.log(updateLight(yellow))//red
console.log(updateLight(red))//green