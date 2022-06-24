// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

//P: a string
//R: name + " plays banjo" (if name begins with "R" or "r") name + " does not play banjo" (if name doesn't begin with "R" or "r")
//E:
//P:

const areYouPlayingBanjo = name => {
  //create a condition that uses 'startsWith' method to check for "R" or "r"
  if (name.startsWith('R') || name.startsWith('r')) {
    return (name + " plays banjo")
  }else{
    return (name + " does not play banjo")
  }
}

console.log(areYouPlayingBanjo(John))//"John does not play banjo"
console.log(areYouPlayingBanjo(Joe))//"Joe does no play banjo"
console.log(areYouPlayingBanjo(Ray))//"Ray plays banjo"