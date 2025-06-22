const account_id=14532;
let accountEmail="2023ugcs019@nitjsr.ac.in";
var accountPassword="12134";
account_city="Banglore";

// account_id=12345; not possible

accountEmail="asu@gmail.com";
accountPassword="1212";
account_city="Jaipur";

console.log(account_id);

console.table([account_id,accountEmail,accountPassword,account_city]);

let account_age;
console.table([account_id,accountEmail,accountPassword,account_city,account_age]);

/*
Prefered not to use var due to issue of block scope and functional scope
*/