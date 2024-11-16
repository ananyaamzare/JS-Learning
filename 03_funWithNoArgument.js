

function show(){
    console.log('My name is Ananya');
    console.log('Im a web coder');
    console.log('My tech Skills is - Python + html + css + javascript + bootstrap + Angular + ');
}
show(); // Fun invocation

console.log('_____________________________');


function checkType(value){ //var value = 100;
  console.log('value is', value);
  console.log('Type is: ', typeof value);
  console.log('---------------------------');
}
checkType(100);
checkType("GK");
checkType(true);
checkType(undefined);
checkType(null);
checkType();

console.log('__Function with argument and return value__');

//  this is nameFunction

function addition(arg1, arg2, arg3){
    console.log('Value are:' , arg1, arg2, arg3);
    var result =arg1 + arg2 + arg3;
    return result;
}
 var res = addition (10, 23 ,456);
 console.log('Result is', res);
 
var res = addition(-56, 239, 677);
console.log('Result is', res);

addition('GK', 66, 'pune'); // it will concat it // bring them together.

//no argument

function display(){
   return "Learning JS" 
}
var resultDisplay = display();
console.log();
console.log('______________Assignments:______________________');


function bankDetails(bankName, accountNum, location, pinCode) {
    console.log('bankName:', bankName, 'accountNum:', accountNum, 'location:', location, 'pinCode:', pinCode);
 }
 
 // Calling the function with different bank details
 bankDetails("CITIbank", 295736957447, 'pune', 444389);
 bankDetails("Axis bank", 92384103848, 'mumbai', 444607);
 bankDetails("HDFC bank", 233948573948, 'nagpur', 444720,'open');

 function checkVal(value){
    console.log('value is :',value);
    console.log('type is:',typeof value);
    console.log(`___________________________________________`);
 }

 checkVal("Anu");
 checkVal(45678);
 checkVal("pune");
 checkVal(true);
 checkVal("no");
 checkVal(null);
 checkVal(undefined);

 console.log(`=================end==================`);
 
 function  myDetails(){
    console.log('my Name is Ananya !');
    console.log('i Know coding');
 }
 myDetails();









 






