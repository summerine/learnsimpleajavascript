console.log('Favourite Colours');

let prompt = require('prompt-sync')();

let colours = []; //empty array

for (let i = 0; i < 5; i++){
    let favouriteColours = prompt("What's your favourite colours? ");
    colours.push(favouriteColours);
}

    console.log("My favourite colours are: "); 
for (let i = 0; i < colours.length; i++){
    console.log(`${i + 1}. ${colours[i]}`);
}