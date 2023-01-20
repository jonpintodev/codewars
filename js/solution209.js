// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

//a whole positive integer (amount) a string (rating)
//the amount of tip based on the rating


function calculateTip(amount, rating) {
  //.toLowerCase() to make the string case insensitive
  const rate = rating.toLowerCase();
  
  //switch statement for all cases
  switch (rate) {
    case 'terrible':
      return Math.ceil(amount * .00);
      break;
    case 'poor':
      return Math.ceil(amount * .05);
      break;
    case 'good':
      return Math.ceil(amount * .1);
      break;
    case 'great':
      return Math.ceil(amount * .15);
      break;
    case 'excellent':
      return Math.ceil(amount * .2);
      break;
    default:
      return 'Rating not recognised'
  }
}

console.log(calculateTip(20, "excellent"), 4)
console.log(calculateTip(26.95, "good"), 3)
console.log(calculateTip(100, "eggcellent"), 'Rating not recognised')