// ["","",""]
// [{},{},{}]

const coding=["cpp","java","js","py","rb"]

// coding.forEach(function (item){
//     console.log(item)
// })

// coding.forEach((val)=>{
//     console.log(val)
// })

// function array_iterate(item){
//     console.log(item)
// }
// coding.forEach(array_iterate)

coding.forEach((item,index,array)=>{
    console.log(item,index,array)
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(`${item.languageFileName} -> ${item.languageName}`)
})
