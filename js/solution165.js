// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

//a num that ends in zero(s)
//the num with no zero(s) at the end

function noBoringZeros(n) {
  return +`${n}`.replace(/0+$/, '')
}