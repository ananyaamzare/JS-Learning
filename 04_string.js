

var greet = "Food morning Vijay Dude";
var lengthGreet = greet.length;

console.log(greet,'length of string is:', lengthGreet);

console.log(`_____________________________________`);


var charAt0 = greet.charAt(0);

console.log(`${greet} - char at 0th index is ${charAt0}`);

var charAtLastIndex = greet.charAt(lengthGreet - 1);

console.log(`Last char is ${charAtLastIndex} of Index ${lengthGreet}`);

console.log(`######################################`);

var firstName = "Ananya";
var lastName  = " Amzare";

var result = firstName + lastName;

console.log(`concatenation string is${result}`);

var result = firstName.concat(lastName);

console.log(`My full name is ${result}`);

console.log(`-----------------------------------------------`);

var result = greet.indexOf('m');
console.log(`Index of the char "m" is ${result}`);

var res = greet.indexOf('Dude');
console.log(`Index of sub string 'Dude' is : ${res}`);

console.log(`-------------------------------`);

var res = greet.includes('Vijay');
console.log(`res is ${res}`);

console.log(`-----------------------------------`);
var result = greet.split(' ');
console.log(result);

var words = result.length;
console.log(`Total number of words are : ${words}`);

console.log(`'''''''''''''''''''''''''''''''''''`)

var greet = "          Good Morning          ";
var result = greet.trim();
var length = result.length
console.log(`Before trim string length is : ${greet.length} , After trim string length is ${result} and its length is ${result.length}`);









