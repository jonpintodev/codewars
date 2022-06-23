// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

//P: two numbers can be positive or negative
//R: the amount of blank pages needed when the two numbers are multiplied
//E:
//P:

function paperwork(n, m) {
  //create a conditional that checks n for 0
  if (n < 0) {
    return 0
  //create a conditional that check m for 0
  }else if (m < 0) {
    return 0
    //else statement multiplying the parameters if they are positive numbers
  }else{
    return n * m
  }
}

console.log(paperwork(5, 8))//40
console.log(paperwork(0, 5))//0
console.log(paperwork(4, 2))//8
