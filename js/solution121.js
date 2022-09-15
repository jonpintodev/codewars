// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

//P: three integers
//R: the sum of all integers
//E:
//P:

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

console.log(goals(5, 10, 2))//17
console.log(goals(10, 10, 4))//24
console.log(goals(7, 2, 9))//18