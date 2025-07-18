console.log('Packing List');

let prompt = require('prompt-sync')();

let packingList = [];

for(let i = 0; i < 5; i++){
    let inputItem = prompt("What item to pack? ");
    packingList.push(inputItem);
}

console.log('My packing list: ', packingList.join(", "));


for(i = 0; i < packingList.length; i++){
    let lowerItem = packingList[i].toLowerCase();

    if(lowerItem === "nothing" || lowerItem === "n/a"){
        packingList.splice(i, 1);
        i--;
    }
}

console.log("Cleaned packing list: ", packingList.join(", "));
