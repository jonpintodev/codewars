// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

//P: a non-negative integer
//R: "1 sheep...2 sheep...3 sheep... etc" for as many times as the value of num
//E:
//P:

//had to change parameter variable from "num" to "length" 
var countSheep = function (length){
  //create an array from the parameter
  return Array.from({ length }, (x,y) => ++y + ' sheep...').join('')
}

console.log(countSheep(3))//"1 sheep...2 sheep...3 sheep"
console.log(countSheep(1))//"1 sheep"
console.log(countSheep(5))//"1 sheep...2 sheep...3 sheep...4 sheep...5 sheep"