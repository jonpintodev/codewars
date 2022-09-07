// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

//P: three numbers
//R: the volume of the cuboid (length * width * height)
//E:
//P:

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}

console.log(getVolumeOfCuboid(2, 2, 3))//12
console.log(getVolumeOfCuboid(5, 5, 2))//20
console.log(getVolumeOfCuboid)