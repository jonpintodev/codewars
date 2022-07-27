// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

//P: a string (name) from an input
//R: "Hello <name> how are you doing today?"
//E:
//P:

function greet(name){
  //use a template literal to use the string from the input
  return `Hello, ${name} how are you doing today?`
}

console.log(greet('John'))//"Hello, John how are you doing today?"
console.log(greet('Jeff'))//"Hello, Jeff how are you doing today?"
console.log(greet('Karen'))//"Hello, Karen how are you doing today?"