// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//P: a string of all lower case letters and/or spaces
//R: the number of vowels in the string
//E:
//P:

function getCount(str) {
  //declare a variable that holds the number of vowels
  let vowelsCount = 0;
  //an array that holds that elements we are looking for in the str
  const vowels = ['a', 'e', 'i', 'o', 'u']
  //loop to search for the vowels in the str. Adds number to the variable vowelsCount
  for (let i of str) {
    if (vowels.includes(i)) vowelsCount++;
  }
  //returns the number that was placed in the variable by the loop
  return vowelsCount
}

console.log(getCount('hello'))//2
console.log(getCount('world'))//1
console.log(getCount('goodbye'))//3