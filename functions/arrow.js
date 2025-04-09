const user={                               // this is used to point the current context
    username:"Arjun",
    price:"$300",
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to this website`)
        // console.log(this)          // prints current context
    }
}

// user.welcomeMessage()
// user.username="Naruto"
// user.welcomeMessage()

// console.log(this)  
// { } becoz no current context available in the global scope if run onto node 
//  but in browser it is not empty becoz the global object is windows object.


// function one(){
//     console.log(this)  // here in the functional scope this prints the global object.
// }
// one()

// two()
// function two(){
//     let username="Naruto"
//     console.log(this.username)   // here it prints undefined but in object declaration it prints the current context
// }

const this_fun=function(){
    let username="Naruto"
    console.log(this.username)
}
this_fun()


const arrow= ()=>{                      //this provides { } and undefiend in both cases of arrow function
    console.log(this)
}
arrow()

const arrow1= ()=>{
    console.log(this.username)
}
arrow1()

const arc=(num1,num2)=>{
    return num1+num2
}
console.log(arc(4,6))

const arc1=(num1,num2)=>(num1+num2)

console.log(arc1(4,5))

const arrow_f=(num1,num2)=>({obj1:"Fruits"})

console.log(arrow_f(3,6))



 

                   