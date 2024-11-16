

function vowelCount(str){

    let count = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
    
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u"
        ||char == "A" || char == "E" || char == "I" || char == "O" || char == "U"){
        console.log(char); 
        count = count + 1;
    }
}
console.log(`total count ${count}`)
}
vowelCount("I am very good UI developer");



function cubeAdd(num){
    
    let count = 0;
   for (let index = 0; index < num.length; index++) {
    let num = num * num * num;

    console.log(index);
    count = count + count;
    
   }
   console.log(`total count ${count}`)

}

cubeAdd(1,2,3,4,5,6);

function cubeAdd(...nums) {
    let count = 0;
    for (let index = 0; index < nums.length; index++) {
        let cubed = nums[index] * nums[index] * nums[index]; // Cube each number
        count += cubed; // Add the cubed value to the total
    }
    console.log(`Total count: ${count}`);
}
cubeAdd(1, 2, 3, 4, 5, 6);

function oddPositionchars(str){
    for (let index = 0; index < str.length; index++) {
        const char = str.charAt(index);
        if (index%2!=0 && char != ' '){
            console.log(char);
        }
    }
}
oddPositionchars("hello Ananya")

function oddPositionchars(str) {
    for (let index = 0; index < str.length; index++) {
        const char = str.charAt(index);
        if (index % 2 != 0 && char != ' ') {
            console.log(char);  // Log the character at the odd position
        }
    }
}

oddPositionchars("hello Ananya");


function reversestring(str){
        
    for (let index = str.length; index <= 0; index--) {
        const strnig = str.charAt(index);
        console.log(string);
        
    
    }
}
reversestring("Ananya is a good girl")


function reversestring(str) {
    for (let index = str.length - 1; index >= 0; index--) {
        const char = str.charAt(index); // Get the character at the current index
        console.log(char);  // Print each character from the end to the beginning
    }
}
reversestring("Ananya is a good girl");









