



// 1. object Destructuring 
 let student  = {
  rollNumber: 2233,
  state: "MH",
  city:"pune",
  college: "7coep Pune"
 }

// let state = student.state;
// let college = student.college
// let city = student.city

let {state, college, city, pin=55678} = student;
console.log(state, city, college, pin);
//2. Array Destructuring
// let array = [4,5,6,7,8,9];
// array.push(10);
// array.splice(2,3) //removing 
// Use splice() if you want to modify the original array directly.
// Use filter() to create a new array without 6.
// console.log(array);
let array = [4,5,6,77];

let [ num1, num2, num3,num4=76] = array;
console.log(num1, num2, num3, num4);






















