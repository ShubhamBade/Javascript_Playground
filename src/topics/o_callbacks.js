// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished

function makeCalculation(...args){
    let result= args[0]+args[1];
    args[2](result,args[3]); 
}

function displayResult(result,testCallBack){
    console.log("Displaying result :",result);
    testCallBack();
}
function testCallBack(){
    console.log("Test Done : excuted after displayResult")
}

makeCalculation(10,20,displayResult,testCallBack)


