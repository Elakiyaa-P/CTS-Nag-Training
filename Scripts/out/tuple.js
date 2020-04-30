var custTuple = [];
var fname;
var lname;
var contact;
var address;
var age;
function push() {
    document.getElementById("Add").addEventListener("click", function (event) {
        fname = document.getElementById("X").value;
        lname = document.getElementById("Y").value;
        contact = document.getElementById("phn").value;
        address = document.getElementById("address").value;
        age = document.getElementById("age").value;
        custTuple.push(fname);
        custTuple.push(lname);
        custTuple.push(age);
        custTuple.push(contact);
        custTuple.push(address);
        console.log("Pushed:");
        for (var itr = 0; itr < custTuple.length; itr++) {
            console.log(custTuple[itr] + "\n");
        }
    });
}
function pop() {
    document.getElementById("Delete").addEventListener("click", function (event) {
        custTuple.pop();
        console.log("Popped:");
        for (var itr = 0; itr < custTuple.length; itr++) {
            console.log(custTuple[itr] + "\n");
        }
    });
}
//# sourceMappingURL=tuple.js.map