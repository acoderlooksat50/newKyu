/* Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
P: receive an input of length, width, and height
E: 1,4,4 = 16
R: return the values multiplied together
P: function takes in the values, multiplies them together, then returns the value
*/

class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height
    }
  }

/* One line solution
const Kata = {
    getVolumeOfCuboid : (length, width, height) => length * width * height
  }
*/
