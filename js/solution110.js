// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

//P: a non negative number (base) and a positive number (factor)
//R: true if factor is a factor of base
//E:
//P:

function checkForFactor (base, factor) {
  //conditional that checks for a remainder
  if (base % factor === 0) {
    return true
  }else{
    return false
  }
}

console.log(checkForFactor(10, 2))//true
console.log(checkForFactor(7, 2))//false
console.log(checkForFactor(5, 3))//false