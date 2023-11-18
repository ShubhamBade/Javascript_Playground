// starting with javascript variables
// we can declare variable with var, let ,const

/* 
  declaring variable with var
  we can redclare variable using var
  we can re-initialize
  global scope and hoisted
*/
var1="use before declare"
console.log(var1) // hoisted
var var1="Welcome";
console.log(var1)

var var1=100; // re-declare and re-initialize
console.log(var1)

/* 
    declaring variable with let
    we cannot redclare variable
    we can re-initialize
    variable should defined before use
    variable is blocked scope
*/

var2=1000000
let var2="let Variable"
console.log(var2)
// let var2=10  error- cannot redeclare
var2=100 // we can re-initialize
console.log(var2)

/*
    declaring variable with const
    we canot redclare and re-initialize
    we cant change value as well as type
    block scope
    we can chnage value of array and object - change and add property
*/

const var3=100;
console.log(var3)
// var3=200 error-read only
// const var3; error-already declared

//we can chnage value of array and object 
const names=["shubham","bade",1000]
names.push("New item")
console.log(names)
// const names=[] error
// names=[10,20,30] error-read only

const nameObject={}
nameObject["key"]="shubham"
console.log(nameObject)
