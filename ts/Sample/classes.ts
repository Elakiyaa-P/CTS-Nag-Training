class Person{
    constructor(private name:string,private age:number){ 
    }
    sayName(){
        console.log(`Myself ${this.name}`)
    }
    sayAge(){
        console.log(`I'm ${this.age} yrs old`)
    }
}

const p1=new Person("Elite",21)
console.log(p1.sayAge())
class Employee extends Person{
    constructor(name:string,age:number,private salary:number){
        super(name,age)
    }
    saySalary(){
        console.log("Secret...")
    }
    askForBonus(){
        return this.salary*0.2
    }
    getSalary(){
        return this.salary
    }
}
class Boss extends Employee{
    askForBonus(){
        return this.getSalary()*0.5+super.askForBonus()
    }
}
const boss=new Boss("NAG",36,100000)