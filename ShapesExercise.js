/*

An example of inheritance in TypeScript showing how area of a square, circle are calculated, as well as perimeter and circumference
Further to this, example of how the volume of a cube and sphere are calculated as well as surface areas

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(colour) {
        this._colour = colour;
    }
    Object.defineProperty(Shape.prototype, "colour", {
        get: function () {
            return this._colour;
        },
        enumerable: false,
        configurable: true
    });
    return Shape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(colour, sideLength) {
        var _this = _super.call(this, colour) || this;
        _this._sideLength = sideLength;
        return _this;
    }
    Object.defineProperty(Square.prototype, "sideLength", {
        get: function () {
            return this._sideLength;
        },
        enumerable: false,
        configurable: true
    });
    Square.prototype.calculateArea = function () {
        return (this._sideLength * this._sideLength);
    };
    Square.prototype.calculatePerimeter = function () {
        return (this._sideLength * 4);
    };
    return Square;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(colour, radius) {
        var _this = _super.call(this, colour) || this;
        _this._radius = radius;
        return _this;
    }
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        enumerable: false,
        configurable: true
    });
    Circle.prototype.calculateArea = function () {
        return ((this._radius * this._radius) * 3.14);
    };
    Circle.prototype.calculateCircumference = function () {
        return ((this._radius * 2) * 3.14);
    };
    return Circle;
}(Shape));
var Cube = /** @class */ (function (_super) {
    __extends(Cube, _super);
    function Cube(colour, sideLength) {
        return _super.call(this, colour, sideLength) || this;
    }
    Cube.prototype.calculateVolume = function () {
        return ((this.sideLength * this.sideLength * this.sideLength));
    };
    Cube.prototype.calculateSurfaceArea = function () {
        return ((this.sideLength * this.sideLength) * 6);
    };
    return Cube;
}(Square));
var Sphere = /** @class */ (function (_super) {
    __extends(Sphere, _super);
    function Sphere(colour, radius) {
        return _super.call(this, colour, radius) || this;
    }
    Sphere.prototype.calculateVolume = function () {
        return ((4.0 / 3.0) * 3.14 * (this.radius * this.radius * this.radius));
    };
    Sphere.prototype.calculateSurfaceArea = function () {
        return ((3.14 * 4) * (this.radius * this.radius));
    };
    return Sphere;
}(Circle));
var natSquare = new Square("Blue", 5);
var natCube = new Cube("Red", 5);
var natCircle = new Circle("Green", 5);
var natSphere = new Sphere("Purple", 5);
console.log("Nat's Square is ".concat(natSquare.colour, ", its side length is ").concat(natSquare.sideLength, " therefore its area is ").concat(natSquare.calculateArea(), " and its perimeter is ").concat(natSquare.calculatePerimeter(), "\n"));
console.log("Nat's Circle is ".concat(natCircle.colour, ", its radius is ").concat(natCircle.radius, " therefore its area is ").concat(natCircle.calculateArea(), " and its circumference is ").concat(natCircle.calculateCircumference(), "\n"));
console.log("Nat's Cube is ".concat(natCube.colour, ", its side length is ").concat(natCube.sideLength, " therefore its volume is ").concat(natCube.calculateVolume(), " and its surface area is ").concat(natCube.calculateSurfaceArea(), "\n"));
console.log("Nat's Sphere is ".concat(natSphere.colour, ", its radius is ").concat(natSphere.radius, " therefore its volume is ").concat(natSphere.calculateVolume(), " and its surface area is ").concat(natSphere.calculateSurfaceArea()));
