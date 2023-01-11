// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

// function nextId(ids){
//   //use sort (a - b) to sort the items by value. reduce to find the next smallest unused value
//   return ids.sort((a, b) => a - b).reduce((prev, curr) => prev + (prev == curr), 0)
// }

const nextId = ids => ids.sort((a, b) => a - b).reduce((prev, curr) => prev + (prev == curr), 0)

console.log(nextId([0, 1, 2, 3, 5]), 4)
console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11)
console.log(nextId([0, 2, 0, 2, 1, 2, 5]), 3)