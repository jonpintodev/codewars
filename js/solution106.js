// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//P: a string of letters
//R: each character in the string repeated by as many times as the index (0 index repeated once, 1 index repeated twice and so forth) seperated by a comma only the first character in the repeated sequence is uppercase the rest lower.
//E:
//P:


// ORIGINAL

// function accum(s) {
//   //declare an empty variable that holds a string
// 	let result = ''
//   //declare a variable that holds an array that uses the .toLowerCase() method to make a characters lowercase and the .split method to create an array
//       array = s.toLowerCase().split('')
//   //loop to iterate through the array
//   for(let i = 0; i < array.length; i++) {
//   //finds the first element in the index and uses the .toUpperCase method to make it uppercase
//     result += array[i].toUpperCase()
//   //loop to iterate through the elements in the array
//     for (let j = i; j > 0; j--) {
//       //repeats the element as many times as its index
//       result += array[i]
//     }
//     //conditional to add hyphen
//     if (i < array.length - 1) {
//       result += '-'
//     }
//   }
//   return result
// }

// ONELINER
const accum = s => s.toLowerCase().split('').map((element, index) => element.toUpperCase() + element.repeat(index)).join('-')