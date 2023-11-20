// set - Set is a collection of unique values

const data = new Set(["CORE", "NVDIA", 10, 10, "NVDIA"]); // remove duplicate values
console.log(data);

for (let value of data) {
  console.log(value);
}

const set1 = new Set([10, 40, 10, 20, 50, 30]);
console.log(set1);

// set method
// adding element to the array
set1.add("ASUS")
set1.add("PROBOOK")
console.log(set1)

set1.delete(10)
console.log(set1)

console.log(set1.size) // remember size is not a function

// values - return iterable obj that contain values
const values=set1.values();
for(let value of values){
    console.log(value)
}

// lets work with map - A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

const map1=new Map([
    ["A","Apple"],
    ["B","Banana"],
    ["C","Cherry"]
])
console.log(map1) // Map(3) {'A' => 'Apple', 'B' => 'Banana', 'C' => 'Cherry'}

for(let item of map1){
    console.log(item[0],item[1]) // because item itself array[]
}

// adding new element to the array -set method
map1.set("E","EEEEEEEE")
console.log(map1)

console.log(map1.delete("A")) // deleting element based on key - true / false
console.log(map1)

// access map elements
console.log(map1.get("B"))

// entries() function
for(let entry of map1.entries()){
    console.log(entry)
}

for(let value of map1.values()){
    console.log(value)
}
