var num = 23;
if (num>10){
    console.log(num);
}
console.log(`After if block`);

var num = 23;
if (num%2==0) {
    console.log(`${num} is even`);
} else{
    console.log(`${num} is even`);
}

function voteEligible(age,name){
    if (age<0 || typeof(age) == 'string'){
        console.log(`${name} you age ${age} is invalid`);
        return;
    }
    if (age>=18){
        console.log(`${name} you can vote`);
    }else{
        console.log(`${name} you can not vote`);
    }
}
voteEligible(23,"Anu");
voteEligible(-23,"Anu");

// Nested if else

function voteEligible(age,name){
    // if block to handel all invalid scenarios
    var ageValue = +age;
    if (age<0 ||  age>150  || typeof(age) == 'string'|| isNaN(ageValue) ){
        console.log(`${name} you age ${age} is invalid`);
    } else {
        // else block to handel all valid scenarios

        if (age>=18){
            console.log(`${name} you can vote`);
        }else{
            console.log(`${name} you can not vote`);
        }
    }
}
voteEligible(23,"Anu");
voteEligible(-23,"Anu");
voteEligible("uk","Anu");
voteEligible("30","Anu");
voteEligible(null,"Anu");
voteEligible(undefined,"Anu");
voteEligible(159,"Anu");










