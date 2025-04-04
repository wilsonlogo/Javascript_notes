// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(9)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);  // it will give string 


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(2, 5)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(2, 5)
console.log("C ", myArr);
console.log(myn2);
