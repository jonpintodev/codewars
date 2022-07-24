// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

//P: two words with a space between
//R: two capital letters with dot separating them (initials of the name parameter)
//E:
//P:

function abbrevName(name){
  //split the name parameter into an array
  const arr = name.split(' ');
  //make a variable for the first initial by choosing it using the proper index
  const firstName = arr[0];
  //make a variable for the second initial by choosing it using the proper index
  const lastName = arr[1];
  //concatenate the variables and use .toUpperCase function to get the intended result
  const result = firstName[0].toUpperCase() + '.' + lastName[0].toUpperCase();

  return result
}