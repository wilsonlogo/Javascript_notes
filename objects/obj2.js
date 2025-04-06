const newUser= new Object()  // this is constructor

// const user={}  // this will give singleton object
// console.log(user)  
// console.log(newUser)

newUser.name="Arjun"
newUser.age=18
newUser.email="Ar@gmail.com"
newUser.IsLoggedIn=false

// console.log(newUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname)

const obj1={
    1:"a",
    2:'b'
}
const obj2={
    3:"c",
    4:"d"
}
const obj3={
    5:"e",
    6:"f"
}
// const obj={obj1,obj2,obj3}
// console.log(obj)

// const obj=Object.assign({},obj1,obj2,obj3)
// console.log(obj)

// const newObj={...obj1,...obj2,...obj3}
// console.log(newObj)

const db_user=[
    {
        name:"Ram",
        Age:18,
    },
    {
        name:"Akhand",
        Age:20
    },
    {
        name:"Athrav",
        Age:20
    }
]
console.log(db_user)
console.log(db_user[1].name)
console.log(db_user[1].Age)

console.log(Object.keys(newUser))   //array
console.log(Object.values(newUser))
console.log(Object.entries(newUser))

console.log(regularUser.hasOwnProperty("fullname")) //true or false



