// make promises easier to write
// async makes a function return a Promise
// await makes a function wait for a Promise

function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data has been fetched")
        },[])
    })
}

async function myTest(){
    try {
        let result=await fetchData();
    console.log(result)
    } catch (error) {
        console.log(error)
    }
}
myTest();
console.log("Hey i am called")