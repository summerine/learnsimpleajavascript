var helloWorld = "hello world"; //var is a function-scoped, can be accessed anywhere within the function
helloWorld = "world";

let x = 5; //declare a variable that can be change later on, cannot be accessed outside the scope/function
console.log(x);

const velocity = 34; // constant declare a variable that cannot be change later on

const x1 = 8;
const x2 = "9";

console.log(x1 + x2); //plus can be considered as concatenation if one or both values are string
console.log(x1 + Number(x2)) // convert the value in x1 from string to number

const x3 = "2345px";
const x4 = 9;
console.log(parseInt(x3) + x4); //parseInt can be used to convert the string to integer

const x5 = "2345.8px";
const x6 = 10;
console.log(parseFloat(x5) + x6); //parseFloat can be used to convert the string to float number

const x7 = 10;
const x8 = 20;
console.log(String(x7) + x8); //String can be used to convert the number to string to do concatenation

console.log("1" == 1); //loose equality will compare both values to the same type and see if they are equivalent
console.log(true == 1); //the answer will be true
console.log(null == undefined) //true as both are loosely equivalent 
console.log("" == []); //empty string is equal to empty array