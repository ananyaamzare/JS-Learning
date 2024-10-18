// Step 1: Create an object 'professor' with minimum 5 properties
let professor = {
    name: "Dr. John Doe",
    age: 45,
    subject: "Computer Science",
    university: "ABC University",
    isPermanent: true,
    
    // Step 2: Nested object 'degrees'
    degrees: {
        engineering: "CSC",
        phd: "Adv Computing",
        masters: "AI & ML",
        diploma: "Data Science",
    },
    
    // Step 3: Array 'certificates'
    certificates: [
        "Hacker Rank Participation",
        "Certificate in IFE course",
        "Certificate in Adv Programming"
    ],

    // Step 4: Function to concat all degrees and log on console
    getDegrees: function() {
        return `Teacher degrees are: ${this.degrees.engineering}, ${this.degrees.phd}, ${this.degrees.masters}, ${this.degrees.diploma}`;
    }
};

// Step 4: Logging the concatenated degrees on console
console.log(professor.getDegrees());

// Step 5: Add new property 'totalExperience'
professor.totalExperience = "14 years";
console.log(`Total experience is: ${professor.totalExperience}`);

// Step 6: Modify an existing property, let's change 'age'
professor.age = 50;
console.log("Modified professor object:", professor);

// Step 7: Add a new certificate at the end of 'certificates'
professor.certificates.push("Oracle Certified");

// Step 8: Log the last element of the array 'certificates'
console.log("Last certificate is:", professor.certificates[professor.certificates.length - 1]);
