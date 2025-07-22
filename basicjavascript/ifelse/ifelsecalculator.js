console.log('Hello to Calculator');

let prompt = require('prompt-sync')();

let firstNumber = prompt('Please provide the first number: ');
console.log(Number(firstNumber));

let secondNumber = prompt('Please provide the second number:' );
console.log(Number(secondNumber));

let operator = prompt('Please provide the math operator (+, /, *, -, %)): ');
console.log(operator);

function Calculator(firstNumber, secondNumber, operator) {
    if(operator === '+'){
        return firstNumber + secondNumber;
    } else if (operator === '-') {
        return firstNumber - secondNumber;
    } else if (operator === '*') {
        return firstNumber - secondNumber;
    } else if (operator === '%') {
        return firstNumber % secondNumber;
    } else if (operator === '/') {
        secondNumber = Number(secondNumber);
        if (secondNumber === 0){
            return 'Cannot divide by 0';
        } else {
        return firstNumber / secondNumber;
        }
    }
     else {
        return 'Invalid Operator';
    }
}   
let result = Calculator(firstNumber, secondNumber, operator);
console.log(result);

