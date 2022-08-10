// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

//P: three integers between 0 and 100
//R: the letter grade associating to the average of the 3 parameters
//E:
//P:

function getGrade (s1, s2, s3) {
  //variable that finds the average of the parameters
  const gpa = (s1 + s2 + s3) / 3;
  //conditional that provides the proper return for the gpa
  if (gpa >= 90) {
    return 'A'
  } else if (gpa >= 80) {
    return 'B'
  } else if (gpa >= 70) {
    return 'C'
  } else if (gpa >= 60) {
    return 'D'
  } else {
    return 'F'
  }
}

console.log(getGrade(90, 88, 70))//'B'
console.log(getGrade(88, 92, 100))//'A'
console.log(getGrade(70, 65, 88))//'C'