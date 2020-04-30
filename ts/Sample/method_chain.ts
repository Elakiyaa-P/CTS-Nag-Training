class AddNumbers{
    private x: number
    constructor(start=0){
        this.x=start
    }
    public add(index=1){
        this.x+=index
        return this
    }
    public print(){
        console.log(this.x)
        return this
    }
}

//Here it is in Action

new AddNumbers(2)
.add(3)
.add()
.print()
.add(1)