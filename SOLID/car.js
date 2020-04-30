//--------------------------------------------
// wheel 
//--------------------------------------------
//--------------------------------------------
// MRF-wheel 
//--------------------------------------------
var MRFWheel = /** @class */ (function () {
    function MRFWheel() {
        console.log("MRF wheel constructed..");
    }
    MRFWheel.prototype.rotate = function () {
        console.log("MRF wheel rotating...");
    };
    return MRFWheel;
}());
//--------------------------------------------
// CEAT-wheel 
//--------------------------------------------
var CEATWheel = /** @class */ (function () {
    function CEATWheel() {
        console.log("CEAT wheel constructed..");
    }
    CEATWheel.prototype.rotate = function () {
        console.log("CEAT wheel rotating...");
    };
    return CEATWheel;
}());
//--------------------------------------------
// car 
//--------------------------------------------
var Car = /** @class */ (function () {
    function Car(wheel) {
        this.wheel = wheel;
        console.log("car constructed...");
    }
    Car.prototype.setWheel = function (wheel) {
        this.wheel = wheel;
    };
    Car.prototype.move = function () {
        this.wheel.rotate();
        console.log("car is moving...");
    };
    return Car;
}());
//------------------------------------------------
// Drive
//------------------------------------------------
var mrfWheel = new MRFWheel();
var car = new Car(mrfWheel);
car.move();
car.move();
var ceatWheel = new CEATWheel();
car.setWheel(ceatWheel);
car.move();
