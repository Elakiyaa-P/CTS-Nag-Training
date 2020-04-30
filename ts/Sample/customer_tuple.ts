let array=['Elite']
let j:number ;
let position:number;

window.onload = function () {
    var calc = new Tuple();
    calc.init('X', 'output')
};

interface UI{
    add(x:string):string;
    delete(x:string):string;
    init(x:string,output:string);
}

export class Tuple implements UI {
    private x: HTMLInputElement;
    // private y: HTMLInputElement;
    private output: HTMLSpanElement;

    init(x:string, output:string){
        this.x=<HTMLInputElement>document.getElementById(x);
        // this.y=<HTMLInputElement>document.getElementById(y);
        this.output=<HTMLSpanElement>document.getElementById(output);
        this.wireEvents();
    }
    wireEvents(){
        document.getElementById('add').addEventListener('click',event=>{
            this.output.innerHTML=this.add(this.x.value)
        });
        document.getElementById('delete').addEventListener('click',event=>{
            this.output.innerHTML=this.delete(this.x.value)
        });
    }
    add(x:string){
        array.push(x)
        console.log("Array after addition")
        for(j=0;j<array.length;j++){
            console.log(array[j]);
        }
        return x;
    }
    delete(x:string){
        for(j=0;j<array.length;j++){
            if(array[j]===x){
                position=j;
                break;
            }
        }
        array.splice(position,1);
        console.log("Array after Deletion")
        for(j=0;j<array.length;j++){
            console.log(array[j])
        }
        return x;
    }
}