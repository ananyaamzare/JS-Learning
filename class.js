

class Student {
    // fullName;
    // rollNo;
    // college;
    // emailId;
    // mobileNo;
    constructor( fullName, rollNo,college,emailId,mobileNo,){
    this.fullName = fullName;
    this.rollNo = rollNo;
    this.college = college;
    this.emailId = emailId
    this.mobileNo = mobileNo;
    }
    show(){
      console.log(`student name ${this.fullName} ,roll No ${this.rollNo}, college name ${this.college},
         email info ${this.emailId} , mobile number ${this.mobileNo}`);
    }
}

let studentBabita = new Student ("Babita Gates", 121, "cocp Pune", "abcd@gmail.com", "3456-5678-56" );
// console.log(studentBabita);
// studentBabita.show();
let StudentAnanya =  new Student ("Ananya Amzare", 343, "nagar", "ananya@gmail.com",45677-4567789, )
// console.log(StudentAnanya);
// StudentAnanya.show();

let StudentSeta =  new Student ("seta mahan", 73, "Ashoka watika", "seta@gmail.com",45677-345347789, )
// StudentSeta.show();

let StudentSatya =  new Student ("Satya vahan", 765, "nira watika", "satya@gmail.com",45677347789, )
// StudentSatya.show();

let StudentRam =  new Student ("Ram chanrd", 1, "Agodhya clg", "Ram@gmail.com",3456709876523456787789, )
// StudentRam.show();

const arrayStudent = [studentBabita, StudentAnanya,StudentSeta,StudentSatya,StudentRam]
console.log(`Traversing array`);
for (const Student of arrayStudent) {
    Student.show();
}













personAA = {
    name: "Ananya",
    graduation: "",
    location:"",
    city:"",
    pin:"",

}
personBB= {
    name: "Babita",
    graduation: "",
    location:"",
    city:"",
    pin:"",

}
personCC = {
    name: "charu",
    graduation: "",
    location:"",
    city:"",
    pin:"",

}

