

const array = [2,4,7,9,11];
// let sum = 0; //6
// for (const element of array) {//4
//     sum = sum + element; //2+4
// }
// console.log(sum);
console.log(`finding sum using reduce method()`);


const totalSum = array.reduce( ( runningTotal , element , value)=>{
    return runningTotal + element;
},100 ); //second argument value
console.log(totalSum);

const totalMul = array.reduce((currentVal , element) =>{
    return currentVal*element;
})
console.log(totalMul);



