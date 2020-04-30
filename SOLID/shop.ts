
/**
 *
 *  appln : e-commerce appln
 *
 *  1. PriceMatrix : getPrice(item)
 *  2. Billing     : getTotalPrice(cart)
 *  
 *
 */

//  ------------------------------------------------------------------
// PriceMatrix
//  ------------------------------------------------------------------

// Interface
interface PriceMatrix{
    getPrice:(itemCode:string)=>number
}

// Implementation
class PriceMatrix_v1 implements PriceMatrix{
    getPrice(itemCode: string): number {
        //....
        return 100.00
    }
}


class PriceMatrix_v2 implements PriceMatrix{
    getPrice(itemCode: string): number {
        //....
        return 200.00
    }
}

class PriceMatrix_v3 implements PriceMatrix{
    getPrice(itemCode:string):number{
        //..
        return 300.00
    }
}

class PriceMatrix_v4 implements PriceMatrix{
    getPrice(itemCode:string):number{
        //..
        return 400.00
    }
}
//----------------------------------------------------------------------


//  ------------------------------------------------------------------
// Billing
//  ------------------------------------------------------------------

/*
    design & performance issues
    -----------------------------

    ==> tight-coupling b/w dependent & dependency  
        -> can't extend ou s/w with new featrures easily
    ==> too many duplicate dependency instances created & discarded
        -> slow,memory/resourse use high
    ==> unit-testing not possible
        -> dev/bug fix slow

    why these issues ?
    
    ==> dependent itself creating it's own dependency

    sonln:

        => dont't create dependency in dependent's class, do lookup on factory

    limitation on factory lookup:
    
        => factory location tight coupling

    best soln:
    
        ==> don't create / lookup , inject by 'third-party' :  ( Inversion of Control )



*/

class Billing {
    
    // private priceMatrix:PriceMatrix
    // constructor(priceMatrix:PriceMatrix){
    //     this.priceMatrix=priceMatrix;
    // }

    constructor(private priceMatrix:PriceMatrix){}

    getTotalPrice(cart: Array<string>): number {
        let total = 0.0
        for (let i = 0; i < cart.length; i++) {
            let itemCode = cart[i]
            //..
            //let priceMatrix = new PriceMatrix_v1(); // dependency
            let price = this.priceMatrix.getPrice(itemCode);
            total += price
        }
        return total;
    }
}

//----------------------------------------------------------------------
// Main
//----------------------------------------------------------------------

let cart = ["1212", "1313", "1414"]

let pm_v1=new PriceMatrix_v1();
let pm_v2=new PriceMatrix_v2();
let pm_v3=new PriceMatrix_v3();
let pm_v4=new PriceMatrix_v4();
let billing=new Billing(pm_v4);
let totalPrice=billing.getTotalPrice(cart)
console.log(totalPrice)
console.log("happy shopping....")

//----------------------------------------------------------------------