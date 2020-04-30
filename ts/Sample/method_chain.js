var AddNumbers = /** @class */ (function () {
    function AddNumbers(start) {
        if (start === void 0) { start = 0; }
        this.x = start;
    }
    AddNumbers.prototype.add = function (index) {
        if (index === void 0) { index = 1; }
        this.x += index;
        return this;
    };
    AddNumbers.prototype.print = function () {
        console.log(this.x);
        return this;
    };
    return AddNumbers;
}());
//Here it is in Action
new AddNumbers(2)
    .add(3)
    .add()
    .print()
    .add(1);
//# sourceMappingURL=method_chain.js.map