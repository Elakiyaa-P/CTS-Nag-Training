//Generic Class

class Cabinet<ClothingType>{
    contents: ClothingType[] = [];
    add(object: ClothingType) {
        this.contents.push(object)
    }
    remove() {
        return this.contents.pop()
    }
}

//In order to use a Cabinet, you will need another type to work with

interface Sock {
    color: String
}
interface TShirt {
    size: "s" | "m" | "l"
}

//We can create a Cabinet just for Socks by passing in the type Sock when we create a new Cabinet

const sockCabinet = new Cabinet<Sock>()

//Now we can add or remove socks to the Cabinet

sockCabinet.add({ color: "Pink" })
console.log(sockCabinet)
const mySock = sockCabinet.remove()
console.log(mySock)

//As well as creating a Cabinet for TShirt

const tshirtCabinet = new Cabinet<TShirt>()

//Similarly we can add or remove TShirts to the Cabinet

tshirtCabinet.add({ size: "m" })
console.log(tshirtCabinet)
const myShirt = tshirtCabinet.remove()
console.log(myShirt)

//If you are a bit eccentric, you could even create a Cabinet which mixes Socks and TShirts by using a Union

const mixedCabinet = new Cabinet<Sock | TShirt>()