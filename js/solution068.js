// An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

// Examples:

// pointsPer48(12, 20) // 28.8
// pointsPer48(10, 10) // 48 
// pointsPer48(5, 17) // 14.1 
// pointsPer48(0, 0) // 0
// Notes:
// All inputs will be either be an integer or float.
// Follow your dreams!

//P: two positive integers
//R: the average ppg if the players plays the full 48 minutes
//E:
//P:

//SUBMITTED
// function pointsPer48(ppg, mpg) {
//   return +(ppg * 48 / mpg).toFixed(1) || 0
// }

//BETTER
pointsPer48 = (ppg, mpg) => +(ppg * 48 / mpg).toFixed(1) || 0