

// fun Expression 
var num = 100;
console.log(num);
var display = function(){
    console.log(`I am a Angular developer !`);
}
display();
console.log(typeof display);

var add = function ( a , b ){
    
    var res = a + b;
    console.log(`Addition is a + b = ${res}`);
    
}
add(223 ,98);

console.log(`===========================`);

var wordCount = function(word) {
    var words = word.trim().split(" "); // Split the sentence into words
    var wordCount = words.length; // Get the count of words
    console.log(`In the given String - "${word}"`);
    return wordCount;
}

var result = wordCount(" I am a UI developer"); 
console.log(`Word count: ${result}`);
