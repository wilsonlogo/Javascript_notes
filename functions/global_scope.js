// //var c = 300
// let a = 300                    // global scope
// if (true) {                       // block scope
//     let a = 10
//     const b = 20                     
//     console.log("INNER: ", a);
    
// }
// // node scope is different from windows scope
// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    two()
    console.log(website);
}
one()

// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = " youtube"
//         console.log(username + website);
//     }
//     // console.log(website);
// }
// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))             // function hoisting
                                       
// function addone(num){
//     return num + 1
// }


                                            
// addTwo(5)                             // function expression not hoisted
// const addTwo=function(num){
//     return num+2
// }