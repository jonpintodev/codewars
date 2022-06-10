// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

//P: name that is an array, city, and a state
//R: a string "Hello, [joined array]! Welcome to '(city), (state)"
//E:


// //ORIGINAL SOLUTION
// function sayHello( name, city, state ) {
//   //make a template literal insterting the parameters in the proper place in the string
//   //the array must be joined using the array method with (' ') to proved space between elements
//   return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
//   }

//SUBMITTED BECAUSE ONE LINER
sayHello = ( name, city, state ) => `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`


// console.log(sayHello(['John', 'Smith'], Reno, Nevada))//Hello, John Smith! Welcome to Reno, Nevada!
// console.log(sayHello(['Brad', 'Pitt'], Boise, Idaho))//Hello, Brad Pitt! Welcome to Boise, Idaho!
// console.log(sayHello(['Eddie', 'Vedder'], Hollywood, Florida))//Hello, Eddie Vedder! Welcome to Hollywood, Florida!

