// A JavaScript function is a block of code designed to perform a particular task.

/*
    Normal Functions
    normal function are hoisted- use before declare
*/

function function1(){
    console.log("Function 1")
}
function1();

function2("call","before declare"); //hoisted
function function2(p1,p2){
    console.log(p1,p2)
}
function2("shubham",101) // invoke function here
function2(100,101,102) // no error - warning
function2() // no -error

//function used as a variable
function function3(x){
    return x;
}
let x=function3(1000)
console.log(x)

/*
 arrow function in javascript
 arrow function are not hoisted
 */

//  function4(); // error - not hoisted
 const function4=()=>{
    console.log("hello arrow functon")
 }
 function4()

 const function5=()=>console.log("hello"); // avoid {} and return keyword if one statement
 function5();

 const function6=x=>console.log(x) // avoid () - if one argument
 function6("one parameter")

 const function7=(x,y)=>console.log(x,y)
 function7(10) // no error