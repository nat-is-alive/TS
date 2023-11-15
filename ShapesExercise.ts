/*

An example of inheritance in TypeScript showing how area of a square, circle are calculated, as well as perimeter and circumference
Further to this, example of how the volume of a cube and sphere are calculated as well as surface areas

*/

class Shape {

  private _colour:String;

  constructor(colour:String) {
    this._colour = colour;
  }

  get colour():String {
    return this._colour;
  }

}

class Square extends Shape {

  private _sideLength:number;

  constructor(colour:String, sideLength:number) {
    super(colour);
    this._sideLength = sideLength;
  }

  get sideLength() {
    return this._sideLength;
  }

  calculateArea():number {
    return (this._sideLength * this._sideLength);
  }

  calculatePerimeter():number {
    return (this._sideLength * 4);
  }

}

class Circle extends Shape {

  private _radius:number;

  constructor(colour:String, radius:number) {
    super(colour);
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  calculateArea():number {
    return ((this._radius * this._radius) * 3.14);
  }

  calculateCircumference():number {
    return ((this._radius * 2) * 3.14);
  }

}

class Cube extends Square {

  constructor(colour:String, sideLength:number) {
    super(colour, sideLength);
  }

  calculateVolume():number {
    return ((this.sideLength * this.sideLength * this.sideLength));
  }

  calculateSurfaceArea():number {
    return ((this.sideLength * this.sideLength) * 6);
  }

}

class Tesseract extends Cube {

  constructor(colour:String, sideLength:number) {
    super(colour, sideLength);
  }

  calculateSurfaceArea():number {
    return ((this.sideLength * this.sideLength) * 24);
  }

  calculateSurfaceVolume():number {
    return ((this.sideLength * this.sideLength * this.sideLength) * 8); // not sure yet
  }

  calculateHyperVolume():number {
    return (this.sideLength * this.sideLength * this.sideLength * this.sideLength); // not sure?
  }

}

class Sphere extends Circle {

  constructor(colour:String, radius:number) {
    super(colour, radius);
  }

  calculateVolume():number {
    return ((4.0/3.0) * 3.14 * (this.radius * this.radius * this.radius));
  }

  calculateSurfaceArea():number { // 4 pi x radius^2
    return ((3.14 * 4) * (this.radius * this.radius));
  }

}

let natSquare = new Square("Blue", 5);

let natCube = new Cube("Red", 5);

let natCircle = new Circle("Green", 5);

let natSphere = new Sphere("Purple", 5);

let natTesseract = new Tesseract ("Green", 7)

console.log(`Nat's Square is ${natSquare.colour}, its side length is ${natSquare.sideLength} therefore its area is ${natSquare.calculateArea()} and its perimeter is ${natSquare.calculatePerimeter()}\n`);

console.log(`Nat's Circle is ${natCircle.colour}, its radius is ${natCircle.radius} therefore its area is ${natCircle.calculateArea()} and its circumference is ${natCircle.calculateCircumference()}\n`);

console.log(`Nat's Cube is ${natCube.colour}, its side length is ${natCube.sideLength} therefore its volume is ${natCube.calculateVolume()} and its surface area is ${natCube.calculateSurfaceArea()}\n`);

console.log(`Nat's Sphere is ${natSphere.colour}, its radius is ${natSphere.radius} therefore its volume is ${natSphere.calculateVolume()} and its surface area is ${natSphere.calculateSurfaceArea()}\n`);

console.log(`Nat's Tesseract is ${natTesseract.colour}, its side length is ${natTesseract.sideLength} therefore its surface area is ${natTesseract.calculateSurfaceArea()} its surface volume is ${natTesseract.calculateSurfaceVolume()} and its hypervolume is ${natTesseract.calculateHyperVolume()}`);
