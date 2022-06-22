// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

//P: 2 numbers that are either odd or even
//R: true if one number is odd and the other is even. false if they are both odd or even
//E:
//P:

function lovefunc(flower1, flower2){
  // compare the two numbers
  return flower1 % 2 !== flower2 %2
}

console.log(lovefunc(5, 4))//true
console.log(lovefunc(4, 4))//false
console.log(lovefunc(6, 3))//true