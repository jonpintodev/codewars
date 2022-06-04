// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

//P: Will be a number great than 0. List of phrases repeats every 7th number/petal
//R: A phrase specific to the last petal torn.
//E:
//P:

function howMuchILoveYou(nbPetals) {
  // create an array of phrases
  const arr = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  //create a loop to iterate through values between 1 and 6.
  for (let i = 0; i <= nbPetals-1; i +=1){
    if (i === nbPetals-1) {
      return arr[i % 6];
    }
  }
}



console.log(howMuchILoveYou(9))//a lot
console.log(howMuchILoveYou(5))//madly
console.log(howMuchILoveYou(8))//a little