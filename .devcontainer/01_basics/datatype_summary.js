//primitive

//7types:string,number,boolean,null,undefined,symbol,bigint

const score=100
const scoreValue="100.3"
const isLoggedIn=false
const outsideTemp=null
let userEmail

const id=Symbol("123")
const anotherId=Symbol("123")

console.log(id==anotherId)

const bigNumber=BigInt("1234567890123456789012345678901234567890")



//reference (no-primitive)

//object,array,function

const heros=["shaktiman","doga","superman"]
myobject={
    name:"shubham",
    age:24,
}

const myFunction=function(){
    console.log("hello world")
}

console.log(typeof bigNumber)
console.log(typeof heros)
console.log(typeof anotherId)