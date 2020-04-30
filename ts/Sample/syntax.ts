let i=0
const incrementIndex=(value?:number)=>{
    i+=(value===undefined?1:value)
}

//This Function can be called like:

incrementIndex()
incrementIndex(0)
incrementIndex(3)

const numberToString=(n:number)=>{return n.toString()}

// This can be used ina function like map on an array 
// to convert all numbers into a String, if you hover 
// on stringedNumbers below you can see the expected types.

const stringedNumbers=[1,4,6,10].map((i)=>numberToString(i))

// We can use Shorthand to have the function passed directly
// and get the same results with mpore focussed code:

const stringedNumbersT=[1,4,6,10].map(numberToString)

/* 
You may have functions which could accept a lot of types
but you are only interested in a few properties. This is 
a useful case for indexed signatures in types. The following
type declares that this function is OK to use any object
so long as it includes the property name
*/

interface AnyObjButMustHaveName{
name:string
[key:string]:any
}

const printFormattedName=(input:AnyObjButMustHaveName)=>{}

printFormattedName({name:"Elite"})
printFormattedName({name:"Elite",age:21})

const boolOrNumberedFunction=(input:boolean|number)=>{}

boolOrNumberedFunction(true)
boolOrNumberedFunction(21)