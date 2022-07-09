// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting.

//P: three numbers
//R: the amount of waiting passengers that can not fit on the bust
//E:
//P:

function enough(cap, on, wait) {
  //a variable that holds the amount of space left on the bus
  let spaceOnBus = cap - on;
  //conditional that checks if spaceOnBus is greater or equal to the wait
  if (spaceOnBus >= wait) {
    return 0
  //conditional checking for amount of waiting passengers that can not be let on
  } else {
    return wait - spaceOnBus
  }
}

console.log(10, 5, 5)//0 (He can take all waiting passengers)
console.log(50, 25, 30)//5 (He can not take 5 waiting passengers)
console.log(15, 10, 40)//35 (He can not take 35 waiting passengers)