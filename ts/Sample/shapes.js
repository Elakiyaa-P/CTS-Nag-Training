var App;
(function (App) {
    var Shapes;
    (function (Shapes) {
        var Point = /** @class */ (function () {
            function Point(x, y) {
                this.x = x;
                this.y = y;
            }
            Point.prototype.getDist = function () {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            };
            return Point;
        }());
        Shapes.Point = Point;
        var Rectangle = /** @class */ (function () {
            function Rectangle(height, width) {
                this.height = height;
                this.width = width;
            }
            Rectangle.prototype.getPerimeter = function () {
                return this.height * 2 + this.width * 2;
            };
            Rectangle.prototype.getArea = function () {
                return this.height * this.width;
            };
            return Rectangle;
        }());
        Shapes.Rectangle = Rectangle;
    })(Shapes = App.Shapes || (App.Shapes = {}));
})(App || (App = {}));
var AppShapes = App.Shapes;
//Wrapper will put variables below out of the global scope
(function () {
    var p = new AppShapes.Point(3, 4);
    var dist = p.getDist();
    console.log("Distance:" + dist);
    var rect = new AppShapes.Rectangle(10, 4);
    var perimeter = rect.getPerimeter();
    var area = rect.getArea();
    console.log("Perimeter:" + perimeter);
    console.log("Area:" + area);
})();
