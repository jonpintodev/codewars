// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

//P: a number and a string
//R: the string repeated as many times as n
//E:
//P:

function repeatStr (n, s) {
  //create a variable to hold the new repeated string
  let str = '';
  for (let i = 0; i < n; i++){
    str+= s;
  }
  return str;
}

console.log((4, 'party!'))//'party!party!party!party!
console.log((3, 'wow'))//'wowwowwow'
console.log((7, 'howdy!'))//'howdy!howdy!howdy!howdy!howdy!howdy!howdy!'