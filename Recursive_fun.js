


// A recursive function calls itself until a specific condition is met.
//  It’s often used for problems like factorials or Fibonacci series.

function factorial(n) {
    if (n <= 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive case
}
console.log(factorial(5)); // Output: 120


function factorial(n){
    if (n <= 1) return 1;
    return n*factorial (n-1);
}
console.log(factorial(6));


function fibonacci(n) {
    if (n <= 1) return n;          // Base case
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive calls
}

console.log(fibonacci(10)); // Output: 5













