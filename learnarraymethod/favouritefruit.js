console.log("Say your favourite fruit!")

const prompt = require("prompt-sync")();



let fruits = []; //an array

for (let i = 0; i < 3; i++){
        let fruitQuestion = prompt("What's your favourite fruit? "); //loop the question 3 times
        fruits.push(fruitQuestion); //push the value in fruitQuestion to fruits array
        
}

console.log("Your favourite fruits are: ");
for (let i = 0; i < fruits.length; i++){
    console.log(`${i + 1}. ${fruits[i]}`) //do loop equal to the length of string in array, so 3 string in array
}