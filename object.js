


let personAA = {
    empId: 23432,
    state: "MH",
    destination:"in tech",
    city: "pune",
    isMarried:true,
    show:function(){
        console.log(`inside show function`);
    }
}
personAA.show();

console.log(typeof personAA);
console.log(`empId : ${personAA.empId}`); //dot notation
console.log(`emp city :${personAA["city"]}`);//bracket notation

let isMarried = personAA.isMarried;
console.log(isMarried);

personAA.city = "Mumbai";
console.log(personAA.city);

delete personAA.destination;
console.log(personAA);

personAA.adhaarNo = 2345678908765;

let array = [];

let bank ={
    bankName:"SBI Bank",
    accountNo:"84786896453657",
    branch : "ch bz",
    addres : {
        street:"wakas main road",
        pin:46665,
        landmark: "near park",
        telephone:"90987-65434",
        city:"amravti",
        state:"mh",
        country:"ind"
    }
}
let city = bank.addres.city;
console.log(bank);

delete bank.addres.telephone;
console.log(bank);

bank.bankName = "SBI Bank";
bank.accountNo = "84786896453657";
bank.branch = "ch bz";  

let A = {
    food:"maggie",
    cloths:"pink hoody",
    drnik :"tea",
    study:"object in js"
}
 let keysA = Object.keys(A);
 console.log(keysA); 

 let valueA = Object.values(A);
 console.log(valueA); 

 console.log(`-----------------traversig an Object-----------------`);

for (const key in A) {
    if (Object.hasOwnProperty.call(A, key)) {
        const element = A[key];
        console.log(`key: ${key},value:$ {element}`);
        
    }
}
 
A.food;
let B = "food" in A;
console.log(B);










