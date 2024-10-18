


function college(name, year , city, founderNmae){
    this.name = name;
    this.year = year;
    this.city = city;
    this.founderNmae = founderNmae;
}

const coep = new college("dfdv Amravti", 1908, "Amravti","Hanumanji")
console.log(coep);

const mit = new college("MIT Amravti", 1808, "Nagpur"," chandr narayan")
console.log(mit);

const shivaji = new college(" shivaji clg", 1978, "Amravti","prasad narayan")
console.log(shivaji);

college.prototype.country = "BHARAT";
console.log(`mit.country : ${mit.country}`);
console.log(`coep.country : ${mit.country}`);
console.log(`shivaji.country : ${mit.country}`);

















