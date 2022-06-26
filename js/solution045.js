// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

//P: two numbers
//R: true if hero has double the amount of bullets as dragons, false otherwise
//E:
//P:

function hero(bullets, dragons){
  //a conditional that checks if bullets / 2 >= dragons
  return bullets / 2 >= dragons
}

console.log(hero(4, 3))//false
console.log(hero(8, 2))//true
console.log(hero(10,5))//true