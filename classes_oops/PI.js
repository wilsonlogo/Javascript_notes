const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor)

// const pi=Math.PI
// pi=3.14 // This will throw an error because pi is a constant
// console.log(pi)

const chai={
    name:"Chai",
    price:10,
    offer:"10%",
    getPrice: function(){
        return this.price
    }
}
// console.log(Object.getOwnPropertyDescriptors(chai))
// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:false
})
// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

// for(const key in chai){
//     if(!chai.hasOwnProperty(key)) continue;
//     if(chai[key].value !== function(){} && typeof chai[key] !== "function") {
//         console.log(key, chai[key]);
//     }
// }

Object.defineProperties(chai,{
    price:{
        enumerable:false,
    },
    offer:{
        enumerable:false,
    },
    getPrice:{
        enumerable:false,
    }
})

console.log(Object.getOwnPropertyDescriptors(chai));
for(const key in chai){
    console.log(key , chai[key])
}

chai.name="Chai Latte" // This will not change the name because writable is false
console.log(chai.name) // Chai
