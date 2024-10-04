


//  Nan - not a number

var num1 = 0;
var num2 = 0;
var result = num1/num2 ;
console.log(result);

var num3 = "100";
// + add n concat
console.log(`type of num 3 is ${num3}`);
var result = +num3;
console.log(`type of num 3 is ${result}`);

var num4 = "GK";
var result = +num4;
console.log(`type of num 3 is ${result}`);

console.log(`_________implicit convo________`);

var res = "5" + 6;
console.log(res);
// string our number milega toh o concat karega//// string to number it will do 

var result = 80 + true;
console.log(result);
//boolen ko it convert into value like 1 or 0;

var result = "80" + true;
console.log(result);
//80true cox there is impicit conversion from boolean to value true to string "true"

var result = "80" - true;
console.log(result);
//res is 79 coz true into 1 and then to sub

var result = "4" - "2";
console.log(result);

var result = 4 + undefined;
console.log(result); //nan

var result = true + undefined;
console.log(result); //nan

var result = null + undefined;
console.log(result); //nan

console.log(`____________explicit___conversion_______________`);

var num = "22";
console.log(`conversion of "22" is ${ typeof +num}`);

var res = Number("vijay");
console.log( typeof res);

var num = 100;
console.log( typeof num);

var res = String(num);
console.log( typeof res);


var num = 100;
var res = Boolean(num);
console.log( typeof res);

var num = "50";
var res = Boolean(num);
console.log( typeof res);

console.log(`-----------------------------------`);
var num = "50";
var result = Boolean(num);
console.log(`result is ${result} and its : ${typeof result}`);
// implicit and explicit both are happening hear

var isMarried = true;
var result = String(isMarried);
console.log(`result is ${result} and its : ${typeof result}`);

// num to string so toString method'''''''''''''












































