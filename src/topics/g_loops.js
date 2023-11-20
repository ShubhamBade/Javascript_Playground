// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object

//for loop
for (let i = 0; i < 5; i++) {
  console.log("For Loop Iteration :", i);
}
const str = "Welcome";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

//for/in loop - obj
const obj = { company: "SBPVT", field: "IT/SD" };
for (let key in obj) {
  console.log(key, obj[key]);
}

// we can iterate over array as well
//Do not use for in over an Array if the index order is important.- use forEach(()=>{})
const data = [10, 20, 45, 800];
for (let key in data) {
  console.log(key, data[key]); // have access to the index here
}

//for/of loop- loop over iterable string, array, map,set etc
const str2 = "React Native";
for (let value of str2) {
  console.log(value); // do not have access to the index here
}

// while loop - excute block of code as long as condition get true
let num = 10;
while (num <= 10) {
  console.log("Executed");
  num++;
}

// do while loop- this loop excute atleast one time whether true /false
do {
  console.log("Executed one time");
  num++;
} while (num < 10);

// break and continue

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log("Break at 5");
    break;
  }
  if (i == 3) {
    continue;
    console.log("Continue at 3"); // wont excute
  }
}
