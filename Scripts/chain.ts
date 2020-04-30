class Numbers {
    private x: number
    constructor(start = 0) {
        this.x = start
    }
    public add(index = 1) {
        this.x += index
        return this
    }
    public sub(index = 1) {
        this.x -= index
        return this
    }
    public mul(index = 1) {
        this.x *= index
        return this
    }
    public div(index = 1) {
        this.x /= index
        return this
    }
    public mod(index = 1) {
        this.x %= index
        return this
    }
    public print() {
        console.log(this.x)
        return this
    }
}

//Here it is in Action

new Numbers(2)
    .add(3)
    .add()
    .print()
    .sub(2)
    .print()
    .mul(5)
    .print()
    .div(2)
    .print()
    .mod(2)
    .print()