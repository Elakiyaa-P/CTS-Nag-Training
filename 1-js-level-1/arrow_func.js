console.log("Arrow Function")
"use strict"
let getprice = () => 100 + 200

let normalFunc = function() {
    console.log(this)
}
normalFunc();

//Sample Arrow function
// let arrowFunc = () =>
//     console.log(this)
// arrowFunc();