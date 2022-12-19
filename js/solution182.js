// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

//an array of items, an individual item
//return true if item is in the arr


// function include(arr, item){
//   // includes method to scan through arr for item
//   return arr.includes(item)
// }

const include = (arr, item) => arr.includes(item)

console.log(include([1, 2, 3], 2), true)
console.log(include([1, 2, 3], 4), false)