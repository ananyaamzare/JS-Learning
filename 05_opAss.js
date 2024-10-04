



let interviewEligible =function(grdSco,hscSco,sccSco,candidateName){

    let result = grdSco >= 70 && hscSco >= 80 && sccSco >=90 ? 
    `congratulation ${candidateName} you are in ` : `unfortunately better luck next time`;
    console.log(result);

}
interviewEligible(80, 86, 90, "Anu");
interviewEligible(79,56,79,"mahi");
interviewEligible(109,106,100,"sonu");

var num1= 0;
var num2= 0;
console.log(num1/num2);

var pin = "200";
console.log(`${+pin}`);












