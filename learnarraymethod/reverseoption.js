console.log("Reverse Number Options");

let prompt = require('prompt-sync')();

let numberArray = [];

for (let i = 0; i < 3; i++){
    let typeNumber = Number(prompt('Type the number here! '));
    numberArray.push(typeNumber);
}
console.log("The numbers are: ", numberArray.join(", "))

let optionReverse = prompt("Do you want to reverse the number? ");

if (optionReverse.toLowerCase() === "yes" ){
    numberArray.reverse();
    console.log("Reverse result: ", numberArray.join(", "));
} else if (optionReverse.toLowerCase() === "no"){
    console.log("No reverse: ", numberArray.join(", "))
} else {
    console.log("Invalid option! ");
}

