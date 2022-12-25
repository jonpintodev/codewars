// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"

//three nums
//total surface area and volume of a box as an array

getSize = (width, height, depth) => [2 * (width * height + width * depth + height * depth), width * height * depth]

console.log(getSize(10, 5, 5), [250, 250])
console.log(getSize(4, 2, 6), [88, 48])
console.log(getSize(10, 10, 10), [600, 1000])