// .bind() — Returns a New Function with Bound this
// Use when :
// 1. You want to save a version of the function with this fixed, and call it later.

// 2. Especially in callbacks or event handlers, this can be lost or change.

function greet() {
  console.log("Hello, " + this.name);
}

const user = { name: "Sasuke" };
const greetUser = greet.bind(user);

greetUser(); // Hello, Sasuke
// greetUser is now permanently tied to user as this.

// This is useful when you want to ensure that a function always uses a specific context, regardless of how or where it is called.

const user = {
  name: "Itachi",
  greet() {
    console.log("Hello " + this.name);
  }
};

setTimeout(user.greet, 1000); // Hello undefined (this is lost)
setTimeout(user.greet.bind(user), 1000); // Hello Itachi (this is preserved)