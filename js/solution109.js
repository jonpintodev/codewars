// SITUATION

// Imagine you are trying to roll a ball a certain distance down a road. The ball will have a starting speed that slowly degrades due to friction and cracks in the road. Every time the ball rolls a distance equal to its speed or rolls over a crack, its speed decreases by 1. Given a speed of s which the ball starts rolling, and a roadmap r of the street represented by a string, return whether or not the ball will be able to make it past the end of the road (True or False).

// NOTES

// A ball with 0 speed is motionless.

// If a ball happens to roll over a crack, the speed decrease must only take effect after the ball has rolled a distance equal to its speed. For example, if the speed was 10, but the ball hit 2 cracks before rolling 10 distance, the ball's speed should stay at 10 until it has reached 10 distance, in which the speed should decrease to 7 (-2 from cracks and -1 due to friction).

// On the roadmap, "_" represents flat ground and "x" represents a crack

// The length of the roadmap will be equal to the distance to the ball's final destination

// The ball must fall off of the edge of the road for the code to be considered valid.

// EXAMPLES

// A speed of 100, and a roadmap of '_' should return True because the ball would be moving too quickly for friction to be applied and there are no cracks on the road.

// A speed of 1, and a roadmap of '___________' should return False because friction would stop the ball after 1 distance

//P: a positive number and a string of '_' and 'x'
//R: true if the value of speed is enough for the "ball" to travel to the end of the string
//E:
//P:

function ballTest(s, r) {
  //create a variable that holds an array
  //.slice to turn the road (r) into an array from the first index [0] up to the speed of the ball (s)
  //[...r.slice(0,s)] in brackets using spread syntax will make each character an element in the array
  //.filter to find the 'x' in the string.
  //the value of cracks is now the number of cracks from the 'r' string
  let cracks = [...r.slice(0, s)].filter(element => element == 'x').length
  //conditional to check if s if 0 or negative
  if (s <= 0) {
    return false
  }
  //conditional to check if s is greater than the amount of characters in length
  if (s >= r.length) {
    return true
  } else {
    //call the original function and -1 for friction and -cracks
    return ballTest(s - 1 - cracks, r.slice(s))
  }
}