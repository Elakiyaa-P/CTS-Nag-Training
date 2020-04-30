var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayName = function () {
        console.log("Myself " + this.name);
    };
    Person.prototype.sayAge = function () {
        console.log("I'm " + this.age + " yrs old");
    };
    return Person;
}());
var p1 = new Person("Elite", 21);
console.log(p1.sayAge());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.saySalary = function () {
        console.log("Secret...");
    };
    Employee.prototype.askForBonus = function () {
        return this.salary * 0.2;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}(Person));
var Boss = /** @class */ (function (_super) {
    __extends(Boss, _super);
    function Boss() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Boss.prototype.askForBonus = function () {
        return this.getSalary() * 0.5 + _super.prototype.askForBonus.call(this);
    };
    return Boss;
}(Employee));
var boss = new Boss("NAG", 36, 100000);
//# sourceMappingURL=classes.js.map