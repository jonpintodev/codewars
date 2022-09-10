// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

//P: a string
//R: return the string in alphabetical order with *** separating each letter
//E:
//P:

function twoSort(s) {
  //.sort method to in alphabetical order
  //.split to split the elements in the array by the space
  //.join to combine the elements seperated by '***'
  s.sort()[0].split('').join('***')
}

console.log(twoSorts('bitcoin'))//'b***i***t***c***o***i***n'
console.log(twoSort('bike'))//'b***i***k***e'
console.log(twoSort('hello'))//'h***e***l***l***o'