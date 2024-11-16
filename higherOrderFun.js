


// function greet(callback){
//     console.log(`good morning`);
//     callback();
//     let inner = function(){
//         console.log(`thank you im fine`);
//     }
//     return inner;
// }
// function inquire() {
//     console.log(`how are you ...?`);
// }
// greet(inquire);


// function city(cityName){
//     return cityName
       
// }
//  function myState( city,stateName){
//     return city+stateName

// }
// var a = myState(city("Amravti")," MH")
// console.log(a);



// function fullName(a,b){
//     return a+b;
// } 

// var myName = fullName("Ananya"," Amzare");
// console.log(myName);


// function countVowels(str){

//     let count = 0;

//     for(let i=0; i < str.length; i++) {

//         if (str === "a",
//             str === "e",
//             str === "i",
//             str === "o",
//             str === "u" ){
                
//             }
//     }
//     else{
//         console.log(count = count)
//     }
// }
// countVowels("Ananya");
// countVowels("aeiou");


function vowelCount(str){

    let count = 0;
//     for (let index = 0; index < str.length; index++) {
//         let char = str.charAt(index);
    
//     if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u"
//         ||char == "A" || char == "E" || char == "I" || char == "O" || char == "U"){
//         console.log(char); 
//         count = count + 1;
//     }
// }
for (char of str){
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
        count ++;
    }
}
// console.log(`total count ${count}`)
console.log(count);
}
vowelCount("I am very good UI developer");







































































