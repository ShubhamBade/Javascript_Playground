// creating js object
const obj1={firstName:"ASUS",lastName:"VIVOBOOK"}
console.log(obj1,typeof obj1)

const obj2= new Object()
console.log(obj2)

// adding properties
obj2.age=25
obj2.city="PUNE"
console.log(obj2)

//accessing properties
console.log(obj2.city)

const obj3=obj2; // this will not create new obj, it just ref - shallow copy
obj3.age=18; // this will make chnages in original obj
console.log(obj2,obj3) // you will get same obj for both - original copy get modified, these are just reference

// deleting properties
delete obj3.age;
console.log(obj2)

// nested object
obj3.newArray={key:"i am nested"}
console.log(obj3, obj3.newArray.key)

// object method
const person={
    firstName:"React",
    lastName:"native",
    display:function(){
        console.log(this.firstName,this.lastName) // refer curent object
    }
}
console.log(person.display()) // person.display - return function defination

// adding method to object
person.mymethod=function(){
    console.log("another method")
}
person.mymethod2=()=>console.log("myMethod2")
console.log(person.mymethod2)

//convert object to string 
console.log(JSON.stringify(person),typeof JSON.stringify(person))
// above cannot stringfy function
person.display=person.display.toString();
console.log(JSON.stringify(person))


