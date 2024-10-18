



 let  array = [10 , 20 , 30 , 10 , 50 , 90, 70];
 console.log(array);
 console.log(`type od this array is : ${typeof array}`);

 console.log(`${array.length}`);
 let a = array[3];
 console.log(`${a}`);

 let b = array[6];
 console.log(`${b}`);

 let arrayLength = array.length;
 let elementLast = array[arrayLength-3];
 console.log(`${elementLast}`);

 console.log(`----------------------------------------------------------`)
array[1]=100;
console.log(array);
// aarry_name[index_value]= "new value";

console.log(`-------------------------------------------`)
array[1]=100;
console.log(array);
let isAvailable = array.includes(80);
console.log(`Is 80 is available :${isAvailable}`);

let indexOfNun = array.indexOf(50);
console.log(`${indexOfNun}`);
console.log(`----------------array travrsing----------------`);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

console.log(`--------------array traversig in reverse order---------`);
for (let index = arrayLength - 1 ; index >= 0 ; index--) {
    const element = array[index];
    console.log(element);
}
console.log(`------------log even index element------------`);

for (let index = 0; index < array.length; index++) {

    if (index%2==0) {
        const element = array[index];
        console.log(element);
    }
}
console.log(`------------log odd index element------------`);


for (let index = 0; index < array.length; index++) {

    if (index%2!=0) {
        const element = array[index];
        console.log(element);
    }
}

console.log(`incerting element in the first and last positiion`);

var array1 = [10 , 20 , 30 , 10 , 50 , 90, 70];
array.push(70);
array.push(343,343);
array.unshift(60);
array.unshift(21, 22, 43);
console.log(array1);

console.log(`remove elememnt from array`);

var array2 = [10 , 20 , 30 , 10 , 50 , 90, 70];
array.push();
array.shift()
console.log(array2)

console.log(`slice`)

array.slice(3);
console.log(array.slice(3));

console.log(array.slice(2 ,5));

console.log(`incert or remove opretion in array `);
var array2 = [10 , 20 , 30 , 10 , 50 , 90, 70];
let removeElement = array.splice(4);
console.log(array2);
console.log(removeElement);

var array6 = [10 , 20 , 30 , 10 , 50 , 90, 70];
array.splice(4,4);
console.log(array6);

array.splice(array.length-2,2);









































 








 


