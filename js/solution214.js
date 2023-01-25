// Your task is simply to count the total number of lowercase letters in a string.

// Examples
// lowercaseCount("abc"); ===> 3

// lowercaseCount("abcABC123"); ===> 3

// lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

// lowercaseCount(""); ===> 0;

// lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

// lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26



// function lowercaseCount(str){
//  //How many?

// }

// LONG WAY

// function indexOf(string, character){
//   let index = 0
//   while (index < string.length){
//     if (string[index] == character){
//       return index
//     }
//     index++
//   }
//   return -1
// }
// function lowercaseCount(str){
//   let result = 0,
//       string = 'abcdefghijklmnopqrstuvwxyz'
//   for(let index = 0; index < str.length; index++){
//     let character = str[index]
//     if(indexOf(string, character) >= 0){
//       result++
//     }
//   }
//   return result
// }

const lowercaseCount = str => (str.match(/[a-z]/g) || []).length

console.log(lowercaseCount('abc'), 3)
console.log(lowercaseCount('abcABC123'), 3)
console.log(lowercaseCount('abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~'), 3)
console.log(lowercaseCount(''), 0)
console.log(lowercaseCount('ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~'), 0)
console.log(lowercaseCount('abcdefghijklmnopqrstuvwxyz'), 26)