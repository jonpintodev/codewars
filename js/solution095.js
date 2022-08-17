// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

//P: a string with a number value instead of a character
//R: the string with the correct characters replacing the numbers
//E:
//P:

function correct(string) {
  //.replace and regex to make corrections
	return string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I')
}

console.log(correct('Hello W0rld!'))//'Hello World!'
console.log(correct('5led'))//'Sled'
console.log(correct('LEARN W1TH LE0N'))//'LEARN WITH LEON'