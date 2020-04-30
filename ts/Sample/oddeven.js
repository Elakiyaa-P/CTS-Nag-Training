var num = function (no) {
    for (var i = 0; i < no.length; i++) {
        if (no[i] % 2 === 0)
            console.log(no[i] + " " + "is Even");
        else
            console.log(no[i] + " " + "is Odd");
    }
};
var no;
no = [23, 34, 100, 124, 44];
num(no);
