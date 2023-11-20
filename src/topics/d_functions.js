// A JavaScript function is a block of code designed to perform a particular task.

/*
    Normal Functions
    normal function are hoisted- use before declare
*/

function function1() {
  console.log("Function 1");
}
function1();

function2("call", "before declare"); //hoisted
function function2(p1, p2) {
  console.log(p1, p2);
}
function2("shubham", 101); // invoke function here
function2(100, 101, 102); // no error - warning
function2(); // no -error

//function used as a variable
function function3(x) {
  return x;
}
let x = function3(1000);
console.log(x);

/*
 arrow function in javascript
 arrow function are not hoisted
 */

//  function4(); // error - not hoisted
const function4 = () => {
  console.log("hello arrow functon");
};
function4();

const function5 = () => console.log("hello"); // avoid {} and return keyword if one statement
function5();

const function6 = (x) => console.log(x); // avoid () - if one argument
function6("one parameter");

const function7 = (x, y) => console.log(x, y);
function7(10); // no error

//function expression
const fx = function (x, y) {
  return x + y;
};
const result = fx(10, 20);
console.log(result);

const display = function () {
  return "display function exp";
};
console.log(display());

// rest parameter
function restFunction(...args) {
  for (let item of args) {
    console.log("parameter :", item);
  }
}
restFunction(10, 20, 30);

// javascript has argument object
function hello() {
  console.log(arguments);
}
hello("arg1", 40);

// javascript important functions call, apply and bind
// With call(), an object can use a method belonging to another object.

const user = {
  display: function () {
    console.log(this.firstName + this.lastName);
  },
};
const userData = {
  firstName: "Call",
  lastName: "Vivobook",
};
user.display.call(userData);

// With the apply() method, you can write a method that can be used on different objects.
const user2 = {
  display: function () {
    console.log(this.firstName + this.lastName);
  },
};
const userData2 = {
  firstName: "Apply",
  lastName: "Vivobook",
};
user2.display.apply(userData2);

// The difference is:
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

const car = {
  display: function (city, price) {
    console.log(this.name, city, price);
  },
};
const carObj = {
  name: "ASUS ProBook",
};
car.display.call(carObj, "PUNE", 50000);
car.display.apply(carObj, ["SBPVT", 100000]); // accept arg in array

//bind method - With the bind() method, an object can borrow a method from another object.
const car2 = {
  display: function (city, price) {
    console.log(this.name, city, price);
  },
};
const carObj2 = {
  name: "ASUS ProBook",
};
let methodBorrow = car2.display.bind(carObj2,"BMBMW",5454554); // borrow method from another object and accept arg
methodBorrow(); // show console.log because it borrow method from obj
