console.log("Welcome to grader! ");

let prompt = require("prompt-sync")();

let gradeNumber = Number(prompt("What is your grade? "));

function gradeTracker(gradeNumber){
    if (gradeNumber >= 90 && gradeNumber <= 100){
    console.log("Your Grade is A");
    } else if(gradeNumber >= 70 && gradeNumber <= 89){
    console.log("Your Grade is B");
    } else if(gradeNumber >=  60 && gradeNumber <= 69){
    console.log("Your Grade is C");
    } else if(gradeNumber >= 50 && gradeNumber <= 59){
    console.log("Your Grade is D");
    } else if(gradeNumber <= 49){
    console.log("Your Grade is E")
    } else {
    console.log("Invalid Number!")
    }
}

console.log(gradeTracker(gradeNumber));