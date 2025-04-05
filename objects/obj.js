// singleton  // one object
//Object.create()  // constructor

// object literals  // no singleton

const mySym=Symbol("key1")


const user={
    name:"Ram",
    "full name":"Ram Prasad",
    age:18,
    location: "Jaipur",
    email: "ram@gmail.com",
    isLoggedIn: false,
    lastLoggedIn : ["Monday","Saturday"],
    [mySym]:"mykey1"
}

// console.log(user.name)
// console.log(user["email"])
// console.log(user["full name"])   // user."full name" wrong way
// console.log(user[mySym])


// user["email"]="ram123@gmail.com"
// console.log(user["email"])

// Object.freeze(user)

// user.email="ram234@gmail.com"
// console.log(user);


user.greeting=function(){
    console.log("Hello , User")
}

console.log(user)
// console.log(user.greeting)  // [function(anonymous)]
console.log(user.greeting())

user.greeting2=function(){
    console.log(`Hello , ${this.name}`)
}

console.log(user.greeting2())







