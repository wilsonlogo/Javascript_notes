//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);  // false

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId)   //symbol
console.log(typeof heros)       //object 
console.log(typeof myObj)        //object
console.log(typeof myFunction)   //function(object)
console.log(typeof bigNumber)    //bigint
console.log(typeof isLoggedIn)   //boolean
console.log(typeof outsideTemp)  //object
console.log(typeof userEmail) // undefined
console.log(typeof scoreValue)  //number

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) => copy     Heap (Non primitive) => reference

let val1="Ram Prasad"
let val2= val1
val="Arjun Thapar"

console.log(val1)
console.log(val2)

let obj={
    Name:"arjun",
    Email:"user@gamil.com"
}
let obj2=obj
obj2.Email="arjun@gmail.com"
console.log(obj)
console.log(obj2)

