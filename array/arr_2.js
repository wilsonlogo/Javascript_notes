const marvel_heros=["Spiderman","Iron Man","Hulk","Thor"]
const DC_heros=["Batman","Superman","Flash"]

// marvel_heros.push(DC_heros)                   
// console.log(marvel_heros)    ["Spiderman","Iron Man","Hulk","Thor",["Batman","Superman","Flash"]] output of these two code  

// marvel_heros.concat(DC_heros)
// console.log(marvel_heros)

// console.log(marvel_heros[4][2])

// const new_heros=marvel_heros.concat(DC_heros)                // ["Spiderman","Iron Man","Hulk","Thor",Batman","Superman","Flash"]
// console.log(new_heros)

// const heros=[...DC_heros , ...marvel_heros]
// console.log(heros)

// const arr=[1,2,3,[4,8],[23,7,[13,10,12]]]
// const new_arr=arr.flat(Infinity)
// console.log(new_arr)

console.log(Array.isArray("ARJUN"))
console.log(Array.from("ARJUN"))

const score1=200
const score2=330
const score3=1456

console.log(Array.of(score1,score2,score3))



