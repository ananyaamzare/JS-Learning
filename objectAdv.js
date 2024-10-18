


// const student = {
//     food:"maggie",
//     cloths:"pink hoody",
//     drnik :"tea",
//     study:"object in js"
// }
// student.food = "pasta";
// console.log(student);

// let person = {
//     name:"Abc",
//     adhar: "XXXXXXXX"
// }

//student = person; //not allowed
const employee = {
    food:"Roti",
    cloths:"blackhoody",
    drnik :"coffee",
    study: "project in js"
}
Object.freeze(employee)
employee.food = "mango";
console.log(employee);
