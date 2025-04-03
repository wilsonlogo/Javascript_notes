const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);         // this is a way known as string interpolation

const gameName = new String('hitesh-hc-com')  // another way to declare string in the form of an object

console.log(typeof gameName)       // object

// console.log(gameName[0]);
// console.log(gameName.__proto__);        // syntax to use different methods known as prototypes 


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, -4)
console.log(anotherString)

// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));