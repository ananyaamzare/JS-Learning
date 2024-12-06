// const arr = [1,2,3,4];

// let a = arr.map((val)=>{
//     return val*val
// })
// console.log(a);

// const array = [2,3,4,5,57,8,554,5,66];

// let oddNum = array.filter((num)=>{
//     return num % 2 !== 0 ;
    
// })
// console.log(oddNum);

// let evenNum = array.filter( function(num){
//     return num%2 === 0;
// })
// console.log(evenNum);


// for (let i = 1; i <= 1000; i++) {
//      let str = i.toString();
//      let count = 0;
  
//     for (let char of str) {
//       if (char === '1') {
//         count++;
//       }
//     }

//     if (count === 1) {
//       console.log(i);
//     }
// }
// const num = 5;
// factorial = 1;
// i=1;

// for (let i = 1; i <= 5; i++){
//     factorial = factorial*i;
// }
// console.log(factorial);
// // 0,1,1,2,3,5,8,13... fibonacci series
// // const n = 10; // Number of Fibonacci numbers to generate
// // let fibonacciS = [0, 1]; // Initialize the series with the first two numbers

// // for (let i = 2; i < n; i++) {
// //     // Calculate the next number as the sum of the previous two
// //     fibonacciS[i] = fibonacciS[i - 1] + fibonacciS[i - 2];
// // }

// // console.log(fibonacciS); // Output the series
// function generateFibonacci(n) {
//     let fibSeries = [0, 1]; // Starting the series with 0 and 1
//     // Generate the series using a loop
//     for (let i = 2; i < n; i++) {
//         fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
//     }
//     // Handle cases where n < 2
//     if (n === 1) {
//         return [0];
//     } else if (n === 0) {
//         return [];
//     }
//     return fibSeries; // Return the full series
// } 
// const n = 10; // Number of Fibonacci numbers to generate
// console.log(generateFibonacci(n));

// const n = 10;
// a = 0 ;
// b = 1;
// console.log(a);
// if (a > 1) {
//     console.log(b)
// }
// for (let i = 2 ; i < n; i++) {

//     let next = a + b;
//     console.log(next);
//     a = b;
//     b = next 
// }


// fibonacci
// let n = 10 ;

// let a = 0 , b = 1;

// console.log(a);
// console.log(b);

// for (let i = 2; i<n; i++){
//     let c = a+b;
//     console.log(c);
// a=b;
// b=c;
// }

let array = [2,5,6,7,8,9];

let result = array.map((item)=>{
    return item<=9 ? item : 0

})
console.log(result)

























































































  



 


















