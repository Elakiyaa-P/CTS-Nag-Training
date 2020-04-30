var Shapes;
(function (Shapes) {
    var Rectangle = /** @class */ (function () {
        function Rectangle(height, width) {
            this.height = height;
            this.width = width;
        }
        Rectangle.prototype.getArea = function () {
            return this.height * this.width;
        };
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
    var MyProg;
    (function (MyProg) {
        function run() {
            var rect = new Shapes.Rectangle(7, 7);
            var area = rect.getArea();
            console.log(area);
        }
        run();
    })(MyProg || (MyProg = {}));
})(Shapes || (Shapes = {}));
//# sourceMappingURL=myprog.js.map