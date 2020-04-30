//Generic Class

class Product<ProductType>{
    contents: ProductType[] = [];
    add(object: ProductType) {
        this.contents.push(object)
        console.log(this.contents)
    }
    remove() {
         this.contents.pop()
        console.log(this.contents)
    }
}

interface Shoes {
    size: "s" | "m" | "l"
    make:string
}
interface Chairs {
    style:"modern"
    manufacturer:"wood"
}

const shoeProd = new Product<Shoes>()
const shoeProd2=new Product<Shoes>()

shoeProd.add({ size:"l",make:"VKC Pride" })
// console.log(shoeProd)
shoeProd2.add({size:"m",make:"BATA"})
// console.log(shoeProd2)
const myShoe = shoeProd.remove()
// console.log(myShoe)
const myShoe2=shoeProd2.remove()
// console.log(myShoe2)


const chairProd = new Product<Chairs>()

chairProd.add({ style:"modern",manufacturer:"wood" })
console.log(chairProd)
const myChair = chairProd.remove()
console.log(myChair)

const mixedProd=new Product<Shoes|Chairs>()
console.log(mixedProd)