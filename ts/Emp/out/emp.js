var Employee = /** @class */ (function () {
    function Employee(fn, ln) {
        this.fn = fn;
        this.ln = ln;
    }
    Employee.prototype.getFN = function () {
        console.log("First Name:" + this.fn);
    };
    Employee.prototype.getLN = function () {
        console.log("Last Name:" + this.ln);
    };
    Employee.prototype.getFullName = function () {
        console.log("Full name:" + this.fn + " " + this.ln);
    };
    return Employee;
}());
window.onload = function () {
    var emp = new Employee("Elite", "Prabakar");
    emp.getFN();
    emp.getLN();
    emp.getFullName();
};
//# sourceMappingURL=emp.js.map