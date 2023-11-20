// Hoisting is JavaScript's default behavior of moving declarations to the top.

x="Value at top : 10"
console.log(x) // this works becuase of hoisting
var x;

//Variables defined with let and const are hoisted to the top of the block, but not initialized.
varLet="data"
let varLet;

//const we need to declare and initialize
const value=1000;
console.log(value)