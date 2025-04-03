// let myDate=new Date()
// console.log(typeof myDate)

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toJSON())
// console.log(myDate.toISOString())

// let myCreatedDate=new Date(2023,0,5)
// console.log(myCreatedDate.toLocaleString())
// let myCreatedDate1=new Date(2023,11,5,4,25,23)
// console.log(myCreatedDate1.toLocaleString())
// let myCreatedDate3=new Date("2023-01-25")
// console.log(myCreatedDate3.toLocaleString())
// let myCreatedDate4=new Date("04-25-2023")
// console.log(myCreatedDate4.toLocaleString())

let newDate=new Date()
let timestamp=Date.now()

console.log(timestamp)
console.log(newDate.getTime())
console.log(Math.floor(timestamp/1000))


console.log(newDate.getDay())
console.log(newDate.getMonth()+1)

newDate.toLocaleString('default',{
    weekday:"long"
})



