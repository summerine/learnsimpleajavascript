let names = ['Athena', 'Cairo', 'Luxor']; // an array with three strings/elements
console.log(names);
console.log(names[0]);

names[0] = 'Athena-Skibidi'; // change the value in the index 0
console.log(names); 

names.push('Mini-Cairo'); //push the element to the end of array
console.log(names);

names.pop(); // remove the element out of the end of array
console.log(names);

console.log(names.length); // get the number of elements within the array 

for (let i = 0; i < names.length; i++){
	console.log(names[i]);
}