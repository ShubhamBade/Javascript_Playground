// To create a class inheritance, use the extends keyword.
// A class created with a class inheritance inherits all the methods from another class:

class Car{
    constructor(name){
        this.name=name;
    }
    display(){
        console.log(this.name)
    }
}

class Display extends Car{
    constructor(name){
        super(name)
    }
}
const disObj= new Display("BMVBB")
disObj.display() // inherit parent class method