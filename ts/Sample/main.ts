//Interface
interface IPoint {
    getDist(): number; //Declaration
}
//Module
module Shapes {
    //class
    export class Point implements IPoint {
        //Constructor
        constructor(public x: number, public y: number) {}
            //Instance Member
            getDist(){
                return Math.sqrt(this.x * this.x + this.y * this.y);
            }
            //Static member
            static origin = new Point(0, 0);
    }
}
//Local Variables
var p: IPoint = new Shapes.Point(3, 4);
var dist = p.getDist();
     console.log(dist)
