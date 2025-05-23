let score="33"

console.log(typeof(score));


let valueInNumber = Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)        // number

console.log("\n")

let mrks="33abc"
console.log(typeof(mrks))

mrks=Number(mrks)
console.log(typeof(mrks))
console.log(mrks)            // NaN

console.log("\n")

let nul=null
console.log(typeof(nul))

nul=Number(nul)
console.log(typeof(nul))
console.log(nul)            // 0                    

console.log("\n")

let bol=true
console.log(typeof(bol))

bol=Number(bol)
console.log(typeof(bol))
console.log(bol)            // 1

console.log("\n")

let udef=undefined
console.log(typeof(udef))

udef=Number(udef)
console.log(typeof(udef))  
console.log(udef)          //NaN

// conversion to string

console.log("\n")

let num=33
num=String(num)
console.log(typeof(num))
console.log(num)

console.log("\n")

// conversion to boolean

let no=1
no=Boolean(no)
console.log(no)
console.log(typeof(no))

console.log("\n") 

let no_1=""
no_1=Boolean(no_1)
console.log(no_1)
console.log(typeof(no_1))

console.log("\n")

let no_2="Tim"
no_2=Boolean(no_2)
console.log(no_2)
console.log(typeof no_2)

let no_3=undefined
no_3=Boolean(no_3)
console.log(no_3)
console.log(typeof no_3)