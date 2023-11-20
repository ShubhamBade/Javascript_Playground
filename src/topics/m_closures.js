// A closure is a function having access to the parent scope, even after the parent function has closed.
//Global variables can be made local (private) with closures

// use case-
// Initiate counter
let counter = 0;

// Function to increment counter
function add() {
  let counter = 0;
  counter += 1;
}

// Call add() 3 times
add();
add();
add();
//The counter should now be 3. But it is 0

// lets solve this and understand with js closures
const sum = (function () {
  let counter = 0;
  return function () {
    // firsttime return function
    counter += 1;
    return counter;
  };
})();
console.log(sum());
console.log(sum());

// The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
// This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
// This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
// The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

const multiplication = (function(value){
  let result = 1;
  return function () {
    result *= value;
    return result;
  };
})// this return function in variable- func exp
console.log(multiplication(10)());
