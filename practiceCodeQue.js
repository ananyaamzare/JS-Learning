// vowelCount
function vowelCount(str){

    let count = 0;
    for (char of str){
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
            count ++;
        }
    }
    console.log(`totalCount = ${count}`);
    }
vowelCount("i am very good ui developer");




// your code goes here
let input='';
process.stdin.on("data",function(chunk){
    input+=chunk;
})
process.stdin.on("end",function(){
    main(input)
})
function main(input){
    let lines=input.trim().split("\n");
    let test=Number(lines[0])
    for (let i=0;i<lines.length;i+=3){
        let [n,m]=lines.split(" ").map(Number)
        let str1=lines[i+1]
        let str2=lines[i+2]
    }
    
}







































































































