class Employee {
    fn: string;
    ln: string;
    constructor(fn: string, ln: string) {
        this.fn = fn;
        this.ln = ln;
    }
    getFN() {
        console.log("First Name:"+this.fn) ;
    }
    getLN() {
        console.log("Last Name:"+this.ln);
    }
    getFullName(){
        console.log("Full name:"+this.fn+" "+this.ln);
    }
}
window.onload = function () {
    var emp = new Employee("Elite", "Prabakar");
    emp.getFN();
    emp.getLN();
    emp.getFullName();
};