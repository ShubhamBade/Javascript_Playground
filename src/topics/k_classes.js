//JavaScript Classes are templates for JavaScript Objects. 
// classes are blue print of object

class JsClass{
    //special method of class - allows to initialize class member
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    display(){
        console.log(this.name,this.age)
    }
}
const JsClassObj=new JsClass("javascript",25)
JsClassObj.display()