//--------------------------------------------
// Food 
//--------------------------------------------
//--------------------------------------------
// Pizza Food
//--------------------------------------------
var Pizza = /** @class */ (function () {
    function Pizza() {
        console.log("Pizza is Preparing...");
    }
    Pizza.prototype.eat = function () {
        console.log("Pizza is ready!!! Yummy Pizza!!!");
    };
    return Pizza;
}());
//--------------------------------------------
// Burger Food
//--------------------------------------------
var Burger = /** @class */ (function () {
    function Burger() {
        console.log("Burger is Preparing...");
    }
    Burger.prototype.eat = function () {
        console.log("Burger is ready!!! Yummy Burger!!!");
    };
    return Burger;
}());
//--------------------------------------------
// Hotel
//--------------------------------------------
var Hotel = /** @class */ (function () {
    function Hotel(food) {
        this.food = food;
        console.log("Food is gonna ready");
        this.food = food;
    }
    // setFood(food: Food) {
    //     this.food = food
    // }
    Hotel.prototype.waiter = function () {
        this.food.eat();
        console.log("Paying the Bill");
    };
    return Hotel;
}());
//--------------------------------------------
// Food Delivery
//--------------------------------------------
var pizza = new Pizza();
var hotel = new Hotel(pizza);
hotel.waiter();
hotel.waiter();
var burger = new Burger();
var motel = new Hotel(burger);
motel.waiter();
