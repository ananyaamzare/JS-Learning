

var greet = "Food morning";
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




