// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

//P: two numbers one is length and one is width
//R: return the area if it is a square (both parameters are the same value) return the perimeter if it is a rectangle (both parameters are not equal value)
//E:
//P:

//SUBMITTED
const areaOrPerimeter = function(l , w) {
  // if parameters are the same multiply the parameters and return the value
  if (l === w) {
    return l * w;
  // if parameters are not equal in value multiply each parameter by 2 and add the sum
  } else {
    return (l * 2) + (w * 2)
  }
};

//TERNARY
// const areaOrPerimeter = function (l , w) {
//   return l == w ? w * l : l * 2 + w * 2
// }