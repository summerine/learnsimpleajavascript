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

const condition = 2 > 3 ? "okay, cool" : "no";
console.log(condition);

const value = 3

switch(value){
    case 1:
        console.log("3 is okay");
    break
    case 2:
        console.log("4 is cool");
    break
    default: 
        console.log("okay");
    break;
}

const arr = [1, 2, 3, true]
const arr2 = Array.from("hello")
const arr3 = new Array(5);
console.log(arr3);

arr2[0] = "y" // will change the "h" to "y"
console.log(arr2[arr2.length - 1]); //the result is o
arr2.shift(); //remove the first element of the array 
console.log(arr2);
arr2.unshift('NEW'); //insert the element to the start of the array
console.log(arr2);

console.log(arr2.indexOf("o")) //locate the index array of o
console.log(arr2.includes("l")) // to check whether an element contains a certain element
/*
    there are five characters in hello: h, e, l, l, o
    arr2.length is 5 
    arr2.length - 1 = 5 - 1 = so, accessing the 4th character which is o
*/

arr2.push(4) // push the element to the array and return the array with the new length
arr2.pop(); // remove the last element from the array
console.log(arr2)

const arr4 = arr.concat(arr2); // concat the array1 and array2
console.log(arr4);

const str = arr.join("|") // add elements to the string and will be separated by |
console.log(str);

const arr5 = arr.splice(1, 1); //remove an element from the array, remove 1 and only 1 element is removed 
console.log(arr5);

const arr6 = arr2.slice(1, 1);
console.log(arr6);

//array destructuring
const [a1, a2, ...b1] = [1 , 2, 3, 4] //spread operator to make b1 store the remaining three elements
console.log(a1, a2, b1);
