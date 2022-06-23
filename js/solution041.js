// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

//P: a name (will always be a string)
//R: a special greeting for the name Johnny and a generic greeting for all other names
//E:
//P:

// incorrect function given
// function greet(name){
//   return "Hello, " + name + "!";
//   if(name === "Johnny")
//     return "Hello, my love!";
// }

//fixed function
function greet(name){
  //the if statement and return are put into one line and switched with the generic return statement
  if(name === "Johnny") return "Hello, my love!";
  return "Hello, " + name + "!";
}

console.log(greet(Bill))//"Hello, Bill!"
console.log(greet(Mark))//"Hello, Mark!"
console.log(greet(Johnny))//"Hello, my love!"