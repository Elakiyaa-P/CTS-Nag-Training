console.log("Javascript Modules and Packages")

//feature-1
var myApp = myApp || {};
(function() {
    var mod = {
        doWork() {
            console.log("I'm in mod-1")
            console.log("Rest parameter")

            function fun(...input) {
                let sum = 0;
                for (let i of input) {
                    sum += i;
                }
                return sum;
            }
            console.log(fun(1, 2));
            console.log(fun(1, 2, 3));
            console.log(fun(1, 2, 3, 4, 5));
        }
    }
    myApp.mod1 = mod;

})()