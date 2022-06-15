// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

//P: a num that can be a decimal but will always be positive
//R: the num multiplied by .5 and rounded down
//E:
//P:

function litres(time) {
  //function that multiples time by .5
  const realLitres = time * .5;
  //use method to round down
  return Math.floor(realLitres)
}

console.log(litres(5))//2
console.log(litres(9))//4
console.log(litres(2))//1