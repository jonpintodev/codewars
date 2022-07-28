// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

//P:
//R:
//E:
//P:

function findNeedle(haystack) {
  //use .indexOf method to find 'needle' in the array
  return `found the needle at position ${haystack.indexOf('needle')}`
}

console.log(findNeedle(["car", "needle", "peanut", "pin", ]))//"found the needle at position 1"
console.log(findNeedle(["button", "doge", "needle", "feline"]))//"found the needle at position 2"
console.log(findNeedle(["cup", "trophy", "award", "needle"]))//"found the need at position 3"