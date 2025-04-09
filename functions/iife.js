// Immediately Invoked function Expressions (IIFE)

// to remove global scope variable population

(function chai(){
    // named IIFE
    console.log("DB Connected")
})();  // (()=>)()-> execution . to end the IIFE we put the semicolon

(()=>{
    console.log("DB connected 2")
})();
 
((name)=>{  // parameter passed
    console.log(`DB connected to ${name}`)
})("Naruto");   // simple iife


