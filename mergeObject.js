
// 1. Using Object.assign():
// This method merges multiple objects into one.

let obj1 = { name: "raj", age: 25 };
let obj2 = { city: "Mumbai", occupation: "Engineer" };

let mergedObj1 = Object.assign({}, obj1, obj2);

console.log(mergedObj1);


// 2. Using the Spread Operator (...):
// This is a more modern and cleaner approach.

let obj3 = { name: "vijay", age: 25 };
let obj4 = { city: "Mumbai", occupation: "Engineer" };

let mergedObj2 = { ...obj3, ...obj4 };

console.log(mergedObj2);



