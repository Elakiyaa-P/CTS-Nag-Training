//"use strict"
console.log("data-types.js")
// Simple/Primitive Data Types
//a)Undefined
var v
//b)String
var name = "Elite"
var company = "Cognizant"
var dynamicString1 = "Ms." + name + ", is working in " + company
var dynamicString2 = `Ms. ${name} is working in ${company}`
var multi1 = "line1" + "line2"
var multi2 = `
line1 
line2
`
var arith = `Sum of 1 & 2 is ${1 + 2}`
//c)Number
var count = 12
var cost = 12.12
//d)Boolean
var bool = true
//Complex/ Reference Data Type
//class

function Person(name,age)
{
    this.name=name
    this.age=age
} 
//instances/obj
var a1=new Person("Elite",21)
var a2=new Person("Elak",20)
//Prototype
Person.prototype.sayName=function(){
    console.log(`I'm ${this.name}`)
}
Person.prototype.sayAge=function(){
    console.log(`I'm ${this.age} yrs old`)
}
//class
class Person1{
    constructor(name, age)
    {
        this.name=name
        this.age=age
    }
    sayName(){
        console.log(`I'm ${this.name}`)
    }
    sayAge(){
        console.log(`I'm ${this.age} yrs old`)
    }
}
var p1=new Person1("Elite",21)
var p2=new Person1("Elak",20)
Object.seal(p1)
//delete p1.age
Object.freeze(p1)
//p1.age=20
//Object.preventExtensions(p1)
p1.skill="teaching"
//Employee Class
class Employee{
    constructor(id,name,age){
        this.id=id
        this.name=name
        this.age=age
        console.log("Employee instance constructed..")
    }
}
var e=new Employee(230,"Elakiyaa",21)
console.log(e.id)
console.log(e.name)
console.log(e.age)