// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

//P:
//R: "Player 1 won!" or "Player 2 won" or "Draw"
//E: 
//P:

const rps = (p1, p2) => {
  if (p1 == p2){
    return "Draw!";
  }else if ((p1 == "scissors" && p2 == "paper") || (p1 == "paper" && p2 == "rock") || (p1 == "rock" && p2 == "scissors") ) {
    return "Player 1 won!";
  }else{ 
    return "Player 2 won!";
  }
};

console.log(rps('rock', 'paper'))//Player 1 won!
console.log(rps('paper', 'rock'))//Player 2 won!
console.log(rps('scissor', 'scissor'))//Draw!