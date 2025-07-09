console.log("Dinner Menu!");

const prompt = require('prompt-sync')();

let menu = []; //an array that will have values of dinner

for (let i = 0; i < 5; i++){
    let dinnerDish = prompt("Enter dinner dish: "); //loop the question 5 times
    menu.push(dinnerDish); //push the value from dinnerDish to menu array
}

console.log("The Dinner Menu: ", menu) //print the whole menu
console.log("The First Menu: ", menu[0]); //print the first menu that has an index of 0
console.log("The Last Menu: ", menu[menu.length - 1]); //print the last menu that has an index of 4


