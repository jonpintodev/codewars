// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.


//P: two integers
//R: an array of all integers between the parameters including them
//E:
//P

function between(a, b) {
return Array.from(new Array(b - a + 1), x => a++)
}

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]