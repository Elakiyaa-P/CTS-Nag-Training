namespace Info{
    export interface Stud{
        addStud:()=>void
        delStud:(id1:number)=>void
    }
    let arrName=[];
    export class Student implements Stud{
        constructor(
            public id:number,
            public fn:String,
            public ln:String){
                this.id=id
                this.fn=fn
                this.ln=ln
            }
            addStud(){
                arrName.push(this)
                console.log(this)
                console.log("Added")
            }
            delStud(id1:number){
                if(this.id==id1){
                    console.log(arrName[id1].pop())
                    // arrName[id1]=null
                }
                console.log("Deleted")
                
            }
            // addStud(){
            //     var name: Array<string>
            //     name=["Elakiyaa","Prabakar"]
            //     name.push("Kavitha")
            //     console.log(name)
            //     console.log(name+" "+"is added")
            // }
            // delStud(){
            //     var name: Array<string>
            //     name=["Elakiyaa","Prabakar"]

            //     console.log("Deleted")
            // }
    }
}
    namespace MyProg{
        function run(){
        // var stud=new Info.Student(49,"Elak","Prabu")
        // var get=stud.addStud()
        // var get=stud.delStud()
        // console.log(get)
        var o1=new Info.Student(1,"Sai","Prashanth")
        var o2=new Info.Student(2,"Aparna","M")
        o1.addStud()
        o2.addStud()
        o2.delStud(2)
    }
    run()
}