// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//P: a string
//R: the same string with the vowels removed
//E:
//P:

function disemvowel(str) {
  //use .replace method with regex to replace vowels with nothing
  return str.replace(/[aeiou]/gi, '')
}

console.log(disemvowel('Hello World!'))//'Hll Wrld!'
console.log(disemvowel('Learn With Leon'))//'Lrn Wth Ln'
console.log(disemvowel('What did you say?'))//'Wht dd y sy?'