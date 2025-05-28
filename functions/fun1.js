// function saymyName(){
//     console.log("Naruto Uzumaki")
// }
// saymyName()   reference and execution

// function sum(num1,num2){
//     console.log(num1+num2)
// }
// sum(3,5)

// function sum(num1,num2){
//     // let result=num1+num2
//     // return result
//     return num1+num2
// }
// const result=sum(7,10)
// console.log("Result:",result)

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// // console.log(loginUserMessage("Naruto Uzumaki"))
// console.log(loginUserMessage())  // no argument passed then undefiend will output

function loginUserMessages(username){
    if(username===undefined){   // if(!username)
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessages()) 

function loginUserMessage(username="naruto"){  // default value
    if(username === undefined){   // or simply: if (!username)
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())



