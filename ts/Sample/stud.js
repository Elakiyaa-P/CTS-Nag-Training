var Info;
(function (Info) {
    var arrName = [];
    var Student = /** @class */ (function () {
        function Student(id, fn, ln) {
            this.id = id;
            this.fn = fn;
            this.ln = ln;
            this.id = id;
            this.fn = fn;
            this.ln = ln;
        }
        Student.prototype.addStud = function () {
            arrName.push(this);
            console.log(this);
            console.log("Added");
        };
        Student.prototype.delStud = function (id1) {
            if (this.id == id1) {
                arrName[id1] = null;
            }
            console.log("Deleted");
        };
        return Student;
    }());
    Info.Student = Student;
})(Info || (Info = {}));
var MyProg;
(function (MyProg) {
    function run() {
        // var stud=new Info.Student(49,"Elak","Prabu")
        // var get=stud.addStud()
        // var get=stud.delStud()
        // console.log(get)
        var o1 = new Info.Student(1, "Sai", "Prashanth");
        var o2 = new Info.Student(2, "Aparna", "M");
        o1.addStud();
        o2.addStud();
        o2.delStud(2);
    }
    run();
})(MyProg || (MyProg = {}));
