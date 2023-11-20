// The try statement defines a code block to run (to try).
// The catch statement defines a code block to handle any error.
// The finally statement defines a code block to run regardless of the result.
// The throw statement defines a custom error.

try{
    // throw {message:"custom error"}; // throws error object
    let result=10/a;
}catch(error){
    console.log("Error is here =>",error.message)
}finally{
    console.log("Always execute")
}