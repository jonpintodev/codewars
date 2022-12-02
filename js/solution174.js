// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

//an array of numbers
//a new array of numbers that are divisible by their own index

function multipleOfIndex(array) {
  //filter method to test each element in the array for a function(divisible by the index)
  return array.filter((element, index)=> element % index == 0)
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]), [-6, 32, 25])
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]), [-1, 10])
console.log(multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]), [-85, 72, 0, 68])