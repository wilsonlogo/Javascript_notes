// const myObject={
//     js:"Javascript",
//     cpp:"C++",
//     rb:"Ruby",
//     swift:"Swift for Apple"
// }

// for(const keys in myObject){
//     console.log(`${keys} :- ${myObject[keys]}`)
// }

// const pro_lan=["cpp","js","java","rb","py"]
// for(const key in pro_lan){
//     console.log(pro_lan[key])
// }

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States OF America")
map.set('Fr',"France")
map.set('IN',"IND")            // keys are unique and are not duplicated 
map.set('Fr',"France")         // no futher duplications

for(const keys in map){
    console.log(map[keys])      // not iterable by this method only for of loop will work
}

// for_in works with keys  and for_of works with values
