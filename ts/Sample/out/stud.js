var Info;
(function (Info) {
    var Student = /** @class */ (function () {
        function Student(id, fn, ln) {
            this.id = id;
            this.fn = fn;
            this.ln = ln;
        }
        Student.prototype.addStud = function () {
            var name;
            name = ["Elakiyaa", "Prabakar"];
            name.push("Kavitha");
            console.log(name);
        };
        Student.prototype.delStud = function () {
            console.log("Deleted");
        };
        return Student;
    }());
    Info.Student = Student;
})(Info || (Info = {}));
//# sourceMappingURL=stud.js.map