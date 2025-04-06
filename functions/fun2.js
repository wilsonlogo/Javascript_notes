// function calculateCartPrices(...num1){   // rest or spread operator
//     return num1                           // arrange them into array
// }
// console.log(calculateCartPrices(200,300,500))  

// function calculateCartPrice(val1,val2,...num1){  
//     return num1                          //val1=200 val2=300 num1=[500,2000] 
// }
// console.log(calculateCartPrice(200,300,500,2000))  

const user={
    name:"Naruto",
    price:"$300"
}

function UserLoggedIn(anyuser){
    return `Username is ${anyuser.name} and has price ${anyuser.price}` 
}

console.log(UserLoggedIn(user))
console.log(UserLoggedIn({
    name:"Sam",
    price:"$120"
}))

const arr=[200,300,500]

function returnArray(array){
    return array[1]
}

console.log(returnArray(arr))
console.log(returnArray([300,490,1000,2000]))

