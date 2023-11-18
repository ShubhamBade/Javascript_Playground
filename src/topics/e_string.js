// javascript string 

let str="Javascript string" // we can define string with "" and ''
console.log(str)

// Escape character in string

let str2="Welcome to \"Javascript\" string" // we can use \' and \\ as well
console.log(str2)

// we can say string as object
let str3=new String("New String object") //[] of characters
console.log(str3)
let str4="New String object"
console.log(str3==str4, str3===str4) // true false

let str5=new String("hello")
let str6=new String("hello")
console.log(str5==str6, typeof str5, typeof str6) // js never compare object


// javascript methods
let mystring="  Welcome to Javascript World  "
console.log(mystring.length)

console.log(mystring.slice(0,10)) // return string with start and end index
console.log(mystring.slice(-5)) // output as rld - count from last
console.log(mystring.substring(0,10)) // The difference is that start and end values less than 0 are treated as 0 in substring().
console.log(mystring.substring(-7)) // trurn whole string
console.log(mystring.substr(15,5)) // (from, length) 

console.log(mystring.toLowerCase(),mystring.toUpperCase())

console.log(mystring.replace("Welcome","world")) // case sensative exact match
console.log(mystring.replaceAll("W","#"))
console.log(mystring.replace(/we/i,"##")) // matching with regex //i-case insenative

console.log(mystring.concat("####","$$$$$$")) //concat two or more strings

console.log(mystring.trim()) // removes white spaces from both end 
console.log(mystring.trimStart())// remove from start
console.log(mystring.trimEnd())// remove from end

console.log(mystring.charAt(10)) // return charatcter present at provided index
console.log(mystring.split(" ")) // return array based on seprator

//string serach methods

console.log(mystring.indexOf("a")) // if not found retun -1 nd also take sencond parameter as start index
console.log(mystring.lastIndexOf("a"))

console.log(mystring.search("o")) // searches for a string and return index
console.log(mystring.search(/Java/)) // also take regex
console.log(mystring.includes("Java")) // true or false - based on search

console.log(mystring.match("e")) //returns an array containing the results of matching a string against a string
console.log(mystring.matchAll("W")) //return iterator

console.log(mystring.startsWith(" ")) //true or false
console.log(mystring.endsWith("World"))


