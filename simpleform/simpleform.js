let prompt = require('prompt-sync')()

let userName = prompt("What is your username? ");
console.log(userName);

let userPassword = prompt("What is your password? ");
console.log(userPassword);

let userAge = prompt("What is your age? ");
console.log(userAge);

function validateForm(userName, userPassword, userAge){
    if(userName.length === 0){
        console.log("UserName should not be empty! ");
    } else if (userPassword.length < 6){
        console.log("User Password should be at least 6 characters. ");
    } else if (!userAge ) {
        console.log("Age should not be null ");
    } else {
        console.log("Your data is valid! ")
    }
}

validateForm(userName, userPassword, userAge);

