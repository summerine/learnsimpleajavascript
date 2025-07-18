console.log('Packing List');

let prompt = require('prompt-sync')();

let packingList = []; //an empty array

for(let i = 0; i < 5; i++){
    let inputItem = prompt("What item to pack? ");
    packingList.push(inputItem); //push the items to the array
}

console.log('My packing list: ', packingList.join(", "));


for(i = 0; i < packingList.length; i++){ //loop over each item in the array
    let lowerItem = packingList[i].toLowerCase(); 
    if(lowerItem === "nothing" || lowerItem === "n/a" || lowerItem === "na"){ //check if the item is nothing, n/a or na
        packingList.splice(i, 1); //remove the item at index i by 1
        i--; // step back to do another looping as the array has changed 
    }
}

console.log("Cleaned packing list: ", packingList.join(", "));
