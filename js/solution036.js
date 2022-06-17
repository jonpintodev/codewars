// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

//P: an array of numbers and a number
//R: true or false depending on where yourPoints is more than (true) or less than (false) the average of the classPoints array
//E:
//P:

function betterThanAverage(classPoints, yourPoints) {
  //create a function that takes in the array, sums up the elements in each array
  const initialValue = 0;
  const sumClassPoints = classPoints.reduce((prev, curr) => prev + curr, initialValue);
  //use the .length method to find the average
  const averageClassPoints = sumClassPoints / classPoints.length
  //conditional to compare and return true or false
  if (averageClassPoints <= yourPoints){
    return true
  }else{
    return false
  }
}
  
console.log(betterThanAverage([90, 85, 70, 98, 90], 88))//True
console.log(betterThanAverage([70, 85, 80], 90))//True
console.log(betterThanAverage([80, 75, 80], 75))//False