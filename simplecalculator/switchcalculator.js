console.log ('Welcome to Switch calculator!')

let prompt = require('prompt-sync')();

let a = prompt('Please provide the first value: ');
a = Number(a); //convert the string to number before printing it out
console.log(Number(a));

let b = prompt('Please provide the second value:');
b = Number(b);
console.log(b);

let operator = prompt('Please provide the operator (+, -, /, *, %): ')
console.log(operator)

function calcSwitch(a, b, operator){
    switch(operator){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            if (b === 0) return "Cannot divide by 0";
            return a / b;
        case '*':
            return a * b;
        case '%':
            return a % b;
        default:
            return 'invalid operator';

    }
};
// let result = calcSwitch(a, b, operator);
// console.log(result);
console.log(calcSwitch(a, b, operator)); // this is more simpler and readable 


