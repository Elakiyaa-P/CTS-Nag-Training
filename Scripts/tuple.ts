let custTuple=[]

let fname:string;
let lname:string;
let contact:string;
let address:string;
let age:string;
function push(){
    document.getElementById("Add").addEventListener("click",
    event=>{
        fname=(<HTMLInputElement>document.getElementById("X")).value
        lname=(<HTMLInputElement>document.getElementById("Y")).value
        contact=(<HTMLInputElement>document.getElementById("phn")).value
        address=(<HTMLInputElement>document.getElementById("address")).value
        age=(<HTMLInputElement>document.getElementById("age")).value
        custTuple.push(fname)
        custTuple.push(lname)
        custTuple.push(age)
        custTuple.push(contact)
        custTuple.push(address)
        
        console.log("Pushed:")
        for(let itr=0;itr<custTuple.length;itr++){
            console.log(custTuple[itr]+"\n")
        }
    });}
function pop(){
    document.getElementById("Delete").addEventListener("click",
    event=>{
        custTuple.pop()
        console.log("Popped:")
        for(let itr=0;itr<custTuple.length;itr++){
            console.log(custTuple[itr]+"\n")
        }
    });
}
