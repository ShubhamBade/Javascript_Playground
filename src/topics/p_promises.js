// A JavaScript Promise object contains both the producing code and calls to the consuming code:

let myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I am resolved")
    },[3000])
})
myPromise
    .then((value)=>{
        console.log(value)
    })
    .then((reject)=>{
        console.log("I am called after first promise got resolved")
        reject("I am rejecting at second promise")
    })
    .catch((error)=>{
        console.log("Promise Rejected :",error)
    })