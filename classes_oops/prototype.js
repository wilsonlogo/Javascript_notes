// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()  // this will work because all objects have prototype
// myHeros.hitesh()    //
// myHeros.heyHitesh()  //
// heroPower.heyHitesh()  // this will not work because only arrays have this prototype
// myHeros.getSpiderPower() // this will not work because getSpiderPower is not an array method 

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
console.log(TASupport.__proto__ === TeachingSupport) // true
// console.log(TASupport.__proto__) // { isAvailable: false }

Teacher.__proto__ = User
// console.log(Teacher.__proto__ === User) // true
console.log(Teacher.__proto__ ) // { name: "chai", email: "}
console.log(Teacher.name) // chai



// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)
console.log(Object.getPrototypeOf(TeachingSupport))
console.log(TeachingSupport.__proto__ === Teacher) // true
console.log(TeachingSupport.__proto__.__proto__ === User) // true
// prototype chaining
console.log(TeachingSupport.__proto__.__proto__.__proto__ === Object.prototype) // true 



let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()