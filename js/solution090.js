// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

//P: two parameters that are either true or false
//R: false if both parameters are the same true if otherwise
//E:
//P:

//COMPLETED BEFORE REFACTORING
// function setAlarm(employed, vacation){
//   //use comparison operators
//   if (employed === true && vacation == false) {
//     return true
//   } else {
//     return false
//   }
// }

//SUBMITTED
setAlarm = employed, vacation => employed === true && vacation == false ? true : false