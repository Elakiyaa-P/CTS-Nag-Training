var Numbers = /** @class */ (function () {
    function Numbers(start) {
        if (start === void 0) { start = 0; }
        this.x = start;
    }
    Numbers.prototype.add = function (index) {
        if (index === void 0) { index = 1; }
        this.x += index;
        return this;
    };
    Numbers.prototype.sub = function (index) {
        if (index === void 0) { index = 1; }
        this.x -= index;
        return this;
    };
    Numbers.prototype.mul = function (index) {
        if (index === void 0) { index = 1; }
        this.x *= index;
        return this;
    };
    Numbers.prototype.div = function (index) {
        if (index === void 0) { index = 1; }
        this.x /= index;
        return this;
    };
    Numbers.prototype.mod = function (index) {
        if (index === void 0) { index = 1; }
        this.x %= index;
        return this;
    };
    Numbers.prototype.print = function () {
        console.log(this.x);
        return this;
    };
    return Numbers;
}());
//Here it is in Action
new Numbers(2)
    .add(3)
    .add()
    .print()
    .sub(2)
    .print()
    .mul(5)
    .print()
    .div(2)
    .print()
    .mod(2)
    .print();
