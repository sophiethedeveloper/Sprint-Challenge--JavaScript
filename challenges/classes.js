// 1. Copy and paste your prototype in here and refactor into class syntax.

// Prototypes: 

// function CuboidMaker(attributes){
//   this.length = attributes.length;
//   this.width = attributes.width;
//   this.height = attributes.height;
// }

// CuboidMaker.prototype.volume = function(){
//  return this.length * this.width * this.height;
// }

// CuboidMaker.prototype.surfaceArea = function(){
//   return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
// }

// const cuboid = new CuboidMaker ({
//   length: 4,
//   width: 5,
//   height: 5
// })

// Classes:

class CuboidMakerClass {
    constructor(attributes){
      this.length = attributes.length;
      this.width = attributes.width;
      this.height = attributes.height;
    }
    
    volume(){
      return this.length * this.width * this.height;
    }
    
    surfaceArea(){
      return 2 * (this.length * this.width + this.length * this.height + this.width *   this.height)
    }
  }

    const cuboidTwo = new CuboidMakerClass({
    length: 4,
    width: 5,
    height: 5
    })

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidTwo.volume()); // 100
console.log(cuboidTwo.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class Cube extends CuboidMakerClass{
    constructor(cubeAtrr){
      super(cubeAtrr);
    };
    
    volume(){
      return this.length * this.length * this.length;
    };
    
    surfaceArea(){
      return 6 * (this.length * this.length);
    };
  };
  
  const newCube = new Cube({
    length: 3,
    width: 3,
    height: 3
  });

  //Test for the Cube subaclass
    console.log(newCube.volume()); //27
    console.log(newCube.surfaceArea());// 54
  