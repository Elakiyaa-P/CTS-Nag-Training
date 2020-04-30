showNumbers(10);
function showNumbers(limit) {
    for (var i = 0; i <= limit; i++) {
        // if(i%2===0)
        //     console.log(i,"EVEN");
        // else
        //     console.log(i,"ODD");
        var message = (i % 2 === 0) ? "EVEN" : "ODD";
        console.log(i, message);
    }
}
