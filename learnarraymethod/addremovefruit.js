console.log("Add / Remove Fruit from the Basket");

let prompt = require('prompt-sync')();

let fruits = [];

for(let i = 0; i < 3; i++){
    let fruitQuestion = prompt("What's your favourite fruit? ");
    fruits.push(fruitQuestion);

}

let removedFruit = fruits.pop();

console.log("The removed fruit: ");
console.log(removedFruit);


console.log("what remains of your favourite fruit: ");
for (let i = 0; i < fruits.length; i++){
    console.log(`${i + 1}. ${fruits[i]}`);
}


