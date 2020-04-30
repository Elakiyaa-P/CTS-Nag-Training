window.onload = function () {
    var calc = new Calculator();
    calc.init('X', 'Y', 'Output');
};
var Calculate = /** @class */ (function () {
    function Calculate() {
    }
    Calculate.prototype.init = function (x, y, output) {
        this.x = document.getElementById(x);
        this.y = document.getElementById(y);
        this.output = document.getElementById(output);
        this.wireEvents();
    };
    Calculate.prototype.wireEvents = function () {
        var _this = this;
        document.getElementById('Add').addEventListener('click', function (event) {
            _this.output.innerHTML = _this.add(parseInt(_this.x.value), parseInt(_this.y.value)).toString();
        });
        document.getElementById('Subtract').addEventListener('click', function (event) {
            _this.output.innerHTML = _this.subtract(parseInt(_this.x.value), parseInt(_this.y.value)).toString();
        });
    };
    Calculate.prototype.add = function (x, y) {
        return x + y;
    };
    Calculate.prototype.subtract = function (x, y) {
        return x - y;
    };
    return Calculate;
}());
//# sourceMappingURL=newcalci.js.map