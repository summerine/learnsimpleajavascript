console.log("Welcome to grader! ");

let prompt = require("prompt-sync")();

let numberofStudents = Number(prompt("What is the number of students? "));

let studentNames = [];
let numericGrades = [];
let studentGrades = [];

for (let i = 0; i < numberofStudents.length; i++){
    let name = prompt("What's the student's name? ");
    let grade = Number(prompt("What's the student's grade? "));

    if ( grade < 0 || grade > 100){
        console.log("The grade number is invalid! ");
        i--;
        continue;
    }
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
    } else (gradeNumber <= 49){
    gradeLetter = "E";
    } 

