// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// module.exports = rl;





// let array = [4,5,6,7,8,9,10,11,12];

// let revArray = [];

// for (let i= array.length; i>=0; i--) {
//     revArray.push(array[i]);
// }
// console.log(revArray);


// let array = [1,2,3,4,5,6,7,8,9];

// array.reverse();

// console.log(array);



let array = [4, 5, 6, 7, 8, 9, 10, 11, 12];
let length = array.length;

for (let i = 0; i < length / 2; i++) {
    let temp = array[i];
    array[i] = array[length - 1 - i];
    array[length - 1 - i] = temp;
}

































                                                             
