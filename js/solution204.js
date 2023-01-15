// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

//a string and a num (n) always positive
//remove the amount of exclamation points (n) from left to right

// function remove(s,n){
//   if (n > 0){
//     return remove(s.replace('!', ''), n - 1)
//   }else{
//     return s
//   }
// }

//ONE LINER
remove = (s,n) => n > 0 ? remove(s.replace('!', ''), n - 1) : s

console.log(remove('Hi!', 1), 'Hi')
console.log(remove("!!!Hi !!hi!!! !hi",1), "!!Hi !!hi!!! !hi")
console.log(remove("!!!Hi !!hi!!! !hi",100), "Hi hi hi")
