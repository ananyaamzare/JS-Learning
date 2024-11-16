

//in var case if we did console filst and then declare so it will show undifined
//let and const throw ref error coz its in TDZ(temprol dead zone) until the decleare
//function is fully hoisting


// console.log(a);
// greet()
// function greet() {
//     console.log("good morning");

//  }
//  var a = 9; //decleartion hoised to help but initiolazation is not
//  console.log(a);

// console.log(a);
// let  a= 10 ;

// let a = hello()
// function hello(){
//     console.log("hi");
// }
// console.log(a);


hoist()
function hoist(){
    console.log('function fully hoist')
}

//if we are doing with var
console.log(a);
var a = 10;

//in let const
console.log(b);
let b = 23;

console.log(value)
const value = 12;















































