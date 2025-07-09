console.log("Say your favourite fruit!")

const prompt = require("prompt-sync")();



let fruits = [];

for (let i = 0; i < 3; i++){
        let fruitQuestion = prompt("What's your favourite fruit? ");
        fruits.push(fruitQuestion); //push the value in fruitQuestion to fruits array
        
}

console.log("Your favourite fruits are: ");
for (let i = 0; i < fruits.length; i++){
    console.log(`${i + 1}. ${fruits[i]}`)
}