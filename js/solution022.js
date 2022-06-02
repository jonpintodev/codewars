// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//P: Never an empty string. Will always be a string of digits. No special characters or letters.
//R: A bunch of zeros and ones
//E: 
//P: 
//Make an array that takes in a string.

function fakeBin(x){
  //split into arr
  let fakeBin = x.split('').map(e=>
    e < 5 ?  '0' : '1'
  )
  return fakeBin.join('')
 
  //map thru arr and do if/then
  
  //if element is below 5, turn it into 0

  //if the element is above 5, turn it into 1

  //join and return that string
}

console.log(fakeBin('1234567'),'0000111')
console.log(fakeBin('5625'),'1101')
console.log(fakeBin('333393'),'000010')