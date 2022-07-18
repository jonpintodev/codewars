// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

//P: a string
//R: true or false if the string contains the whole word 'english' in any consecutive form
//E:
//P:

spEng = sentence => /english/i.test(sentence)

  console.log(spEng('I speak english'))//true
  console.log(spEng('hello i eng am not lish'))//false
  console.lol(spEng('Sometimes I speak EkeNgLishEH'))//true