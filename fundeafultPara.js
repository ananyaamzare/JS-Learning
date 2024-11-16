



// function division(num1 , num2=1){
//     console.log(num2);
//     console.log(num1/num2)
// }
// division(4,5);
// division(0,4);
// division(8);
// division(0,0);


function introduce(name = "Guest", ...hobbies) {
    console.log("Hello, " + name + "!");
    console.log("Your hobbies are: " + hobbies.join(", "));
}

introduce("Amit", "reading", "coding");  
// Output:
// Hello, Amit!
// Your hobbies are: reading, coding

introduce();  
// Output:
// Hello, Guest!
// Your hobbies are: 

// Rest Parameter: Gathers all remaining arguments into an array.
// Default Parameter: Provides a default value if no argument is passed for that parameter