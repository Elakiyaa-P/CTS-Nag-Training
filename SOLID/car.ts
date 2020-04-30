//--------------------------------------------
// wheel 
//--------------------------------------------

interface Wheel{
    rotate:()=>void
}

//--------------------------------------------
// MRF-wheel 
//--------------------------------------------

class MRFWheel implements Wheel{
    constructor(){
        console.log("MRF wheel constructed..")
    }
    rotate(){
        console.log("MRF wheel rotating...")
    }
}


//--------------------------------------------
// CEAT-wheel 
//--------------------------------------------


class CEATWheel implements Wheel{
    constructor(){
        console.log("CEAT wheel constructed..")
    }
    rotate(){
        console.log("CEAT wheel rotating...")
    }
}

//--------------------------------------------
// car 
//--------------------------------------------

class Car{
    constructor(private wheel:Wheel){
        console.log("car constructed...")
    }
    setWheel(wheel:Wheel){
        this.wheel=wheel
    }
    move(){
        this.wheel.rotate()
        console.log("car is moving...")
    }
}

//------------------------------------------------
// Drive
//------------------------------------------------


let mrfWheel=new MRFWheel()
let car=new Car(mrfWheel)


car.move();
car.move();

let ceatWheel=new CEATWheel();
car.setWheel(ceatWheel)
car.move();

