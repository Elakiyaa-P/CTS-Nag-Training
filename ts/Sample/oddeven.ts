 let num = (no:Array<number>) => {
    for (let i:number = 0; i < no.length; i++) {
        if (no[i] % 2 === 0)
            console.log(no[i] + " " + "is Even")
        else
            console.log(no[i] + " " + "is Odd")
    }
}


let no: Array<number>;
no = [23, 34, 100, 124, 49]; 
num(no)