// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// Examples(Inputs-->Output):

// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100

// 85, 5 --> 90

// 55, 3 --> 75

// 55, 0 --> 0
// 20, 2 --> 0
// *Use Comparison and Logical Operators.

//P: two integers (0-100) and (0 and above)
//R: 100 if exam grade > 90 or if number of completed projects is > 10.
//R: 90 if exam grade > 75 and if completed projects is >= 5.
//R: 75 if exam grade > 50 and if number of completed projects is >=2
//R: 0 in other cases
//E:
//P:

function finalGrade (exam, projects) {
  return exam > 90 || projects > 10 ? 100
  : exam > 75 && projects > 4 ? 90
  : exam > 50 && projects > 1 ? 75
  : 0
}

console.log(finalGrade(100, 12))//100
console.log(finalGrade(99, 0))//100
console.log(finalGrade(85, 5))//90