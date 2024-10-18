for (let index = 0; index < 10; index++) {
    console.log(`Iteration start`);
    if (index==5){
        break;
    }

console.log(`value is ${index} , Iteration ${index}`);
console.log(` Iteration End`);
console.log(`--------------------------------------------------------------------------`)

}


for (let index = 0; index < 5; index++) {
    console.log(`Iteration start`);
    if (index==3){
        continue;
    }

console.log(`value is ${index} , Iteration ${index+1}`);
console.log(` Iteration End`);
console.log(`--------------------------------------------------------------------------`)

}
