var myApp = myApp || {};
(function() {
    var mod = {
        doWork() {
            console.log("I'm in mod-2")
        }
    }
    myApp.mod2 = mod;
})()