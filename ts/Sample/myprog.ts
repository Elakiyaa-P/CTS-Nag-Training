namespace Shapes {
    export interface Rect {
        // height: number
        // width: number
        getArea(): number
    }
    export class Rectangle implements Rect {
        constructor(
            public height: number,
            public width: number) {
        }
        getArea() {
            return this.height * this.width
        }
    }
    namespace MyProg {
        function run() {
            var rect: Shapes.Rect = new Shapes.Rectangle(7, 7)
            var area =rect.getArea();
            console.log(area)
        }
        run()
    }
}