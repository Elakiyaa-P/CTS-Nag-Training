//Generic Class
var Product = /** @class */ (function () {
    function Product() {
        this.contents = [];
    }
    Product.prototype.add = function (object) {
        this.contents.push(object);
        console.log(this.contents);
    };
    Product.prototype.remove = function () {
        this.contents.pop();
        console.log(this.contents);
    };
    return Product;
}());
var shoeProd = new Product();
var shoeProd2 = new Product();
shoeProd.add({ size: "l", make: "VKC Pride" });
// console.log(shoeProd)
shoeProd2.add({ size: "m", make: "BATA" });
// console.log(shoeProd2)
var myShoe = shoeProd.remove();
// console.log(myShoe)
var myShoe2 = shoeProd2.remove();
// console.log(myShoe2)
var chairProd = new Product();
chairProd.add({ style: "modern", manufacturer: "wood" });
console.log(chairProd);
var myChair = chairProd.remove();
console.log(myChair);
var mixedProd = new Product();
console.log(mixedProd);
//# sourceMappingURL=generic_prod.js.map