console.log("Playing with Functions!!!")

// function func(a, b, c, ...remaining) {
//     console.log(arguments)
//     console.dir(arguments)
//     console.log("Remaining Args are:" +
//         remaining)
// }
// func(10, 20, 30, 40, 50)

// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
// let asc = function(x, y) { return x - y }
// let dsc = function(x, y) { return y - x }
// nums.sort(asc)
// console.log("Ascending order:" + nums)
// nums.sort(dsc);
// console.log("Descending order:" + nums)

// function f1() {
//     console.log(">>>>>>>>>>")
//     let design = function() {
//         console.log("<<<<<<<<<<")
//     }

//     console.log("f1()")
//     return design

// }
// let des = f1();
// des();



// function teach() {
//     console.log("teaching javascript...")
//     let learn = function() {
//             console.log("learning javascript...")
//             console.log("learning ends")
//         }
//         //learn();
//     console.log("teaching ends")
//     return learn
// }
// let learnfun = teach()
// learnfun()
// learnfun()
// //teach()()

// function teach(sub) {
//     console.log(`teaching ${sub}`)
//     let notes = `${sub}-notes`
//     let fun = "bla bla bla"

//     function learn() {
//         console.log(`learning with ${notes}`)
//         console.log(`${fun}`)
//     }
//     //learn();
//     console.log(`teaching ends`)
//     return learn;
// }
// let learnFunc = teach('javascript') // teach-scope
// learnFunc();

//Counter module

// const counter = (function() {
//     console.log("counter module init...")
//     let count = 0 // private
//         // public
//     function inc() {
//         count++
//     }
//     // public
//     function get() {
//         return count;
//     }
//     return {
//         inc: inc,
//         get: get
//     }
// })()

// function f1() {
//     console.log("f1()")
// }

// function f2() {
//     console.log("f2()")
// }

// function bannerWrapper(f) {
//     let banner = function() {
//         console.log(">>>>>>>>>>>>>>>>>>>")
//         if (f) f()
//         console.log("<<<<<<<<<<<<<<<<<<<")
//     }
//     return banner;
// }

// function secWrapper(f) {
//     return function() {
//         console.log("sec check")
//         if (f) f()
//     }
// }
// // let f2WithBanner = bannerWrapper(f1);
// // let f2WithBannerAndSec = secWrapper(f2WithBanner);
// // f2WithBannerAndSec();

// // let f1WithBanner = bannerWrapper(f1)
// // f1WithBanner()
// secWrapper(bannerWrapper(f1))()
// secWrapper(bannerWrapper(f2))()

// var myFunctions = []
// for (var i = 0; i < 2; i++) {

//     var func = function() {
//         console.log(i)
//     }
//     myFunctions.push(func)

// }
// myFunctions[0]()
// myFunctions[1]()

// var myFunctions = []
//     //--------------------------------------
// function getF(i) {
//     var func = function() {
//         console.log(i)
//     }
//     return func
// }
// for (var i = 0; i < 2; i++) {
//     myFunctions.push(getF(i))
// }
// //--------------------------------------
// myFunctions[0]() // 0
// myFunctions[1]() // 1   


// const trainer = {
//     name: 'Nag'
// }

// // trainer = null

// trainer.name = "kishore"

// function isMin(num) {
//     return num <= 100
// }

// function isMax(num) {
//     return num >= 100
// }