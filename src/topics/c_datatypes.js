// Datatypes in javscript
/*
    Primitive data types
    Number
    String
    Boolean
    Bigint
    null
    undefined
    symbol

    Non- primitive data type
    an Object
    an array
    a date
*/

console.log(typeof 10)
console.log(typeof "Shubham")
console.log(typeof false)
console.log(typeof undefined)
console.log(typeof null) // object
console.log(typeof {"key":"bade"})
console.log(typeof []) //object
console.log(typeof new Date()) //object

const largenumber=11212455555555555558888888888888888888888888888888888888888888888888888888888888888;
console.log(largenumber) // 1.1212455555555555e+82 stores in 64 bit floting point number

const largenumber2=BigInt(11212455555555555558888888888888888888888888888888888888888888888888888888888888888)
console.log(largenumber2) // same output as number we passed