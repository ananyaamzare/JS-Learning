//closers means that inner function always has 
//access to vars and parameter of its outer function 

// closures similar to lexical scoping

// const parent = () => {
//     let name = 'Ananya';

//     const child = () => {
//         console.log(name);
//     }
//     child();
// }
// parent();



// function outerFunction() {
//     let outerVariable = "Hello , Im Ananya in Outer";

//     function innerFunction() {
//         console.log(outerVariable);
//     }
//     return innerFunction
// }
// const closureFunc = outerFunction;
// closureFunc();

function  createCounter(){
    let count = 100;

    return function(){
        count++;
        return count;
    };
}
 const counter = createCounter();
 console.log(counter());
 console.log(counter());
 console.log(counter());
 console.log(counter());
 console.log(counter());
 console.log(counter());
 console.log(counter());
 console.log(counter());
 console.log(counter());



















































