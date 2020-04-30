"use strict";
exports.__esModule = true;
var array = ['Elite'];
var j;
var position;
window.onload = function () {
    var calc = new Tuple();
    calc.init('X', 'output');
};
var Tuple = /** @class */ (function () {
    function Tuple() {
    }
    Tuple.prototype.init = function (x, output) {
        this.x = document.getElementById(x);
        // this.y=<HTMLInputElement>document.getElementById(y);
        this.output = document.getElementById(output);
        this.wireEvents();
    };
    Tuple.prototype.wireEvents = function () {
        var _this = this;
        document.getElementById('add').addEventListener('click', function (event) {
            _this.output.innerHTML = _this.add(_this.x.value);
        });
        document.getElementById('delete').addEventListener('click', function (event) {
            _this.output.innerHTML = _this["delete"](_this.x.value);
        });
    };
    Tuple.prototype.add = function (x) {
        array.push(x);
        console.log("Array after addition");
        for (j = 0; j < array.length; j++) {
            console.log(array[j]);
        }
        return x;
    };
    Tuple.prototype["delete"] = function (x) {
        for (j = 0; j < array.length; j++) {
            if (array[j] === x) {
                position = j;
                break;
            }
        }
        array.splice(position, 1);
        console.log("Array after Deletion");
        for (j = 0; j < array.length; j++) {
            console.log(array[j]);
        }
        return x;
    };
    return Tuple;
}());
exports.Tuple = Tuple;
