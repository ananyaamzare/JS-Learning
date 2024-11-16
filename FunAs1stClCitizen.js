// in js we call function at first class citizen
//1. function expression
//2. callback
//4. function can return another function

function show() {
  console.log(`inside show function`);

  let innerFunction = function () {
    console.log(`inside show function`);
  };
  return innerFunction;
}
let inner = show();
console.log(inner);

















