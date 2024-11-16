class employee {

    constructor(emp_id, emp_name,emp_dept,emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name =emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary= emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_Anil = new employee(22,"Anil", "IT", 50000, "TCS");
const emp_Radha = new employee(23,"Radha", "HR", 58000, "wipro");
const emp_rishi = new employee(24,"Rishi", "Finace", 55000, "TCS");
const emp_sonali = new employee(25,"Sonali", "exicative", 80000, "info");
const emp_monika = new employee(26,"Monika", "IT", 57000, "wipro");
const emp_vinay = new employee(28,"Vinay", "IT", 58000, "TCS");

let arrayEmployees = [
    emp_Anil,
    emp_Radha,
    emp_rishi,
    emp_sonali,
    emp_monika,
    emp_vinay,
];

 const employeeTcs = arrayEmployees.filter((employee)=>{
    return employee.emp_company=== 'TCS';
});
console.log(employeeTcs);

for(const employee of employeeTcs) {
    console.log(`Company Name: ${employee.emp_company}, Employee Name: ${employee.emp_name}, Employee dept ${employee.emp_name},`);
    
};

console.log(`***********************************`);
arrayEmployees.filter(employee => employee.emp_company ==='TCS')
.map(employee => employee.emp_name)
.forEach(emp_name => console.log(emp_name));


const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]











































 



 