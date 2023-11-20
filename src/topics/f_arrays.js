// array can hold more than one value of diffent data type

const arr1=["Apple","Orange"]
console.log(arr1)

//access array element
console.log(arr1[0])

//changing array elements
arr1[1]="Coconunt"
console.log(arr1)

const arr2=new Array("Orange","Apple")
console.log(arr2)

// <------ Array Methods ------>
//convert arry to string
console.log(arr1.toString())

//length of array
console.log(arr2.length)

//sort array - only work for string array not for numeric array
console.log(arr2.sort(),arr2) // this method changes original array

console.log(arr2.pop(),arr2) // remove last element from array

console.log(arr2.push("Pinapple"),arr2) // add new element to the array at the end

// shift- remove first element from first - opposite to the pop
console.log(arr2.shift(),arr2)

// unshift - add element to the first position
arr2.unshift("Blackberry")
console.log(arr2)

// we can add new element in array using below trick
arr2[arr2.length]="Its Me"
console.log(arr2)

// delete - can remove all array - undefined will be there
delete arr2[0]
console.log(arr2)

// merging array
console.log(arr1.concat(arr2)) // always return new array
console.log(arr1.concat(arr2,["Apple","Banana"]))

// flattening an array - reducing dimensionality of an array
const arr3=[[10,20],[10,20,30]]
console.log(arr3.flat()) // return new array

// splice - add new item to the array
// slice - slice out a piece of an array

const arr4=["ASUS"]
arr4.splice(0,0,"HP") // first param define where to add new item and second - how many element need to remove
console.log(arr4)
arr4.splice(1,1,"DELL")
console.log(arr4)

// we can remove array elemnt with clever trick
arr4.splice(0,1)
console.log(arr4)

// slice function - return new array (startindex, endindex)
const arr5=["A","W","c","G","Z"]
console.log(arr5.slice(1))
console.log(arr5.slice(0,2))

// reversing an array element
arr5.reverse()
console.log(arr5)

const arr6=[10,2,50,80,5,70]
arr6.sort((a,b)=>{return a-b})
console.log(arr6)

// iteration over array using forEach method
// do not return anything and if we pass [] do not throw any error
arr5.forEach((value)=>{
    console.log(value)
})

// map method - create new array by performing a function on each array elemnt
// thows error if pass null value and this return new array always
 const arr7=arr6.map((item)=>{return item*10})
 console.log(arr7)

 //The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
 console.log(arr7.flatMap((item)=>item*10))


 // filter method - return a new array with array element that pass the test or condition
 const arr8=arr7.filter((value)=> value<500)
 console.log(arr8)

 // reduce function - return a single value by performinng opertion
console.log(arr7.reduce((total,value)=>total+value),arr7) // total-previous count and value-new element from array

// The every() method checks if all array values pass a test.
console.log(arr7.every((value)=>value>=20)) // true or false

//The some() method checks if some array values pass a test.
console.log(arr7.some((value)=>value>400)) // true or false

// indexOf return index of item
console.log(arr7.indexOf(800),arr7.indexOf(7000)) // if not found returm -1

// The find() method returns the value of the first array element that passes a test function
console.log(arr7.find((value)=>value>40))

//The findIndex() method returns the index of the first array element that passes a test function.
console.log(arr7.findIndex((value)=>value>400))

// keys and entries and entries[key, value]
const keys=arr7.keys();
for(let key of keys){
    console.log(key)
}

// includes - check elemnt present in array or not
console.log(arr7.includes(700))

console.log([...arr6,...arr7]) // concating using spread operator
