// console.log("Function Binding!!!")
// let name = "Elite"
"use strict"
// let binding = {
//     name: "Elite",
//     printFunc: function() {

//         console.log("I'm " + this.name) //object's reference
//     }

// }
// binding.printFunc()

// function func() {
//     console.log(this)
// }

// func()

function doTeach(sub, duration, location) {
    console.log(`${this.name} teaching ${sub} in ${location} for ${duration} days`)
}

let tnr = { name: 'Nag' }
let newTnr = { name: 'kishore' }

Object.preventExtensions(tnr)

doTeach.call(tnr, "mean", 75, "ASV")