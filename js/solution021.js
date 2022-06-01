// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

//P: Array will never be empty. Will it always be nums as elements
//R: Average of array rounded down.
//E: 
//P: Make a function that takes in an array

function getAverage(marks){
//reduce our arr
  let total = marks.reduce((acc,c)=>acc+c)
//divide our arr by length and also Math.floor
  return Math.floor(total/marks.length)
//return 
}

//reduce divide by length

console.log(getAverage([1,25.6,]),13)
console.log(getAverage([1,2.2,3,4.1]),2)
console.log(getAverage([11.5,23,3,4.1]),10)