// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//P: a positive number
//R: the same number rearranged in descending order (highest to lowest)
//E:
//P:


//INITIAL CODE
function descendingOrder(n){
  //declare a variable to create an empty string
  let result = '',
  //declare a variable to create an array
      array = [],
  //turn n into a string
      string = String(n)
  //loop to iterate through the string and push it into the array to sort it
  for (let i = 0; i < string.length; i++) {
    array.push(string[i])
  }
  //loop to iterate through the array and sort it in descending order
  for (let i = 0; i < array.length - 1; i++) {
    //loop to iterate and compare the values of the elements in the array to sort it
    for (let j = i + 1; j < array.length; j++) {
      if (Number(array[i]) < Number(array [j])) {
        [array[i], array[j]] = [array[j],array[i]]
      }
    }
  }
  for (let i = 0; i < array.length; i++) {
    result += array[i]
  }
  return Number(result)
};

//SUBMITTED
const descendingOrder = n => Number(String(n).split('').sort((a,b) => b - a).join(''))



console.log(descendingOrder(583))//853
console.log(descendingOrder(0937))//9730
console.log(descendingOrder(412))//421

