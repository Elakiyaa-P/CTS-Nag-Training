
const tn=require('./tn')
const en=require('./en')
const ar=require('./ar')


// (function () {

    console.log("-greeting/index.js-")
    //let message = "welcome"

    function greet(language){
        if(language==="en"){
            //console.log("welcome")
            en();
        }
        if(language==="ar"){
            //console.log("Marhaba")
            ar()
        }
        if(language==="tn"){
            //console.log("Nalvaravu")
            tn()
        }
    }

    //greet()

    module.exports={
        greet
    }

// })()