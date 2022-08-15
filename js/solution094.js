// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

//P the sides of an angle in integers
//R: the angle of the third side
//E:
//P:

function otherAngle(a, b) {
  //since a triangle is 180 degrees subtract the two parameters to find the 3rd angle
  return 180 - a - b;
}

console.log(otherAngle(30, 60))//90
console.log(otherAngle(45, 45))//90
console.log(otherAngle(90, 45))//45