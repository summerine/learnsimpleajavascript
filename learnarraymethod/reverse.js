console.log('Reverse Everything! ');

let prompt = require('prompt-sync')();

let reversedOrderNames = [];

for (let i = 0; i < 3; i++){
    let orderNames =  prompt("Enter any random names! ");
    reversedOrderNames.push(orderNames);
}

let reversed = reversedOrderNames.reverse();

//console.log('Reversed! ', `${reversed}`)

console.log('Reversed names: ', reversed.join(", ")); //take all items in array an joins them in a single string 

