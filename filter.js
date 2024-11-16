


// const array = [2545,57,3565,34534,4563456,456,45,3333, 334,456,566,4543,565,6544,57];

// const numGreater = array.filter((currentValue)=>{
//     return currentValue < 1000;
// });
// console.log(numGreater);









// const array = [ 1,2,3,4,5,6,7,8,9];

// const evenNum = array.filter((curr)=>{
//     return curr % 2 === 0;
// });
// console.log(evenNum);


const array = [23, 4, 5, 6, 7, 15, 27, 9, 4, 25, 6, 8, 9];

const PrimeNum = array.filter((curr) => {
    if (curr < 2) return false; 

    for (let i = 2; i < curr; i++) {
        if (curr % i === 0) {
            return false; 
        }
    }
    return true;
});
console.log("Prime Numbers:", PrimeNum); 




































