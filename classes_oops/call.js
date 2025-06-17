// You want to immediately call a function, but with a specific this.

function greet() {
  console.log("Hello, " + this.name);
}

const user = { name: "Naruto" };
greet.call(user); // Hello, Naruto
// greet.call(user) immediately calls the function with user as this.

// This is useful when you want to execute a function immediately with a specific context, rather than saving it for later.

// You want to borrow a method from another object and use it with a different context.

const anotherUser = { name: "Sakura" };
function greet() {
  console.log("Hello, " + this.name);
}
greet.call(anotherUser); // Hello, Sakura