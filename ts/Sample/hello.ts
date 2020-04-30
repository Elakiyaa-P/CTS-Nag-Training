// var hello:(name?:string=>void);
let hello=(name?:string)=>{
    console.log("Hello"+" "+(name||"Unknown Person"))
}
hello("Elite");
hello()