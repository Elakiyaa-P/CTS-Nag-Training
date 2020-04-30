var Cabinet = /** @class */ (function () {
    function Cabinet() {
        this.contents = [];
    }
    Cabinet.prototype.add = function (object) {
        this.contents.push(object);
    };
    Cabinet.prototype.remove = function () {
        return this.contents.pop();
    };
    return Cabinet;
}());
//We can create a Cabinet just for Socks by passing in the type Sock when we create a new Cabinet
var sockCabinet = new Cabinet();
//Now we can add or remove socks to the Cabinet
sockCabinet.add({ color: "Pink" });
console.log(sockCabinet);
var mySock = sockCabinet.remove();
console.log(mySock);
//As well as creating a Cabinet for TShirt
var tshirtCabinet = new Cabinet();
//Similarly we can add or remove TShirts to the Cabinet
tshirtCabinet.add({ size: "m" });
console.log(tshirtCabinet);
var myShirt = tshirtCabinet.remove();
console.log(myShirt);
//If you are a bit eccentric, you could even create a Cabinet which mixes Socks and TShirts by using a Union
var mixedCabinet = new Cabinet();
