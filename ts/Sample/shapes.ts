namespace App.Shapes {
    export interface IPoint {
        getDist(): number;
    }
    export interface IRectangle {
        height: number
        width: number
        getPerimeter(): number
        getArea(): number
    }
    export class Point implements IPoint {
        constructor(public x: number, public y: number) { }
        getDist() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }
    }
    export class Rectangle implements IRectangle {
        constructor(public height: number, public width: number) { }
        getPerimeter() {
            return this.height * 2 + this.width * 2
        }
        getArea() {
            return this.height * this.width
        }
    }
}
import AppShapes=App.Shapes;
//Wrapper will put variables below out of the global scope

(():void=>{
    var p:AppShapes.IPoint=new AppShapes.Point(3,4)
    var dist=p.getDist()
    console.log("Distance:"+dist)
    var rect:AppShapes.IRectangle=new AppShapes.Rectangle(10,4)
    var perimeter=rect.getPerimeter()
    var area=rect.getArea()
    console.log("Perimeter:"+perimeter)
    console.log("Area:"+area)
})();