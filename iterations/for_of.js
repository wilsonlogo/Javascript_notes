// // for of

// const arr=[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num)
// }

// const greetings="Hello World"
// for(const greet of greetings){
//     console.log(`each char is ${greet}`)
// }

// Maps
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States OF America")
map.set('Fr',"France")
map.set('IN',"IND")            // keys are unique and are not duplicated 
map.set('Fr',"France")         // no futher duplications

// console.log(map)

for(const [keys,value] of map){
    console.log(keys,':-',value)
}


const myObject={
    game1:"NFS",
    game2:"Spiderman"
}
for(const [key,value] of myObject ){
    console.log(key,":-",value)
}                                       //  error myObject not iterable by this method
 
