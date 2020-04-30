//--------------------------------------------
// Food 
//--------------------------------------------

interface Food {
    eat: () => void
}

//--------------------------------------------
// Pizza Food
//--------------------------------------------

class Pizza implements Food {
    constructor() {
        console.log("Pizza is Preparing...")
    }
    eat() {
        console.log("Pizza is ready!!! Yummy Pizza!!!")
    }
}

//--------------------------------------------
// Burger Food
//--------------------------------------------

class Burger implements Food {
    constructor() {
        console.log("Burger is Preparing...")
    }
    eat() {
        console.log("Burger is ready!!! Yummy Burger!!!")
    }
}

//--------------------------------------------
// Hotel
//--------------------------------------------

class Hotel {
    constructor(private food: Food) {
        console.log("Food is gonna ready")
        this.food=food
    }
    // setFood(food: Food) {
    //     this.food = food
    // }
    waiter() {
        this.food.eat()
        console.log("Paying the Bill")
    }
}

//--------------------------------------------
// Food Delivery
//--------------------------------------------

let pizza = new Pizza()
let hotel = new Hotel(pizza)
hotel.waiter()
hotel.waiter()
let burger = new Burger()
let motel=new Hotel(burger)
motel.waiter()