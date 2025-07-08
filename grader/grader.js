console.log("Welcome to grader!");

const prompt = require("prompt-sync")();

let numberOfStudents = Number(prompt("How many students? "));

let studentNames = [];
let numericGrades = [];
let studentGrades = [];

for (let i = 0; i < numberOfStudents; i++){
    let name = prompt(`Enter name of students ${i + 1}: `);
    let grade = Number(prompt(`Enter grade for ${name} (0-100): `));

    if ( grade < 0 || grade > 100 || isNaN (grade)){
        console.log("The grade number is invalid! ");
        i--;
        continue;
    }


let gradeLetter = "";

    if (grade >= 90 && grade <= 100){
    gradeLetter = "A";
    } else if(grade >= 70 && grade <= 89){
    gradeLetter = "B";
    } else if(grade >=  60 && grade <= 69){
    gradeLetter = "C";
    } else if(grade >= 50 && grade <= 59){
    gradeLetter = "D";
    } else {
    gradeLetter = "E";
    } 

    studentNames.push(name);
    numericGrades.push(grade);
    studentGrades.push(gradeLetter);
}

console.log("\n The Student Results: ");
for (let i = 0; i < studentNames.length; i++){
    console.log(`${i + 1}. Name: ${studentNames[i]}, Grade Number: ${numericGrades[i]}, Grade Letter: ${studentGrades[i]}`)
}
