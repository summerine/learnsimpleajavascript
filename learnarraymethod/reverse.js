console.log('Reverse Everything! ');

let prompt = require('prompt-sync')();

let reversedOrderNames = [];

for (let i = 0; i < 3; i++){
    let orderNames =  prompt("Enter any random names! ");
    reversedOrderNames.push(orderNames);
}

let reversedNames = reversedOrderNames.reverse();

//console.log('Reversed! ', `${reversedNames}`)

console.log('Reversed names: ', reversedNames.join(", ")); //take all items in array an joins them in a single string 

let reversedAgain = reversedNames.reverse(); //reverse to the original 

console.log('Original reverse version: ', reversedAgain.join(", "))

