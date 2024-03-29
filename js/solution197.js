// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

//an array of nums(ages)
//array [youngest age, oldest age, difference between youngest and oldest age]

// function differenceInAges(ages){
//   //create an array with each element having the function to get the num from ages array
//   return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)]
// }

//ONE LINER
differenceInAges = ages => [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)]

console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76])
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85])

