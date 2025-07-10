let person = {
    name: 'Athena',
    age: 3,
    job: 'Skibidi Cat',
    isCool: true
}

person.name = "Cairo-girl"; //change the value of the name property to Cairo-girl
person.isEmployed = false; //add an isEmployed property with the value of false - so unemployed 
console.log(person);

console.log(person.isCool);
console.log(person['name']); 

delete person.isEmployed; //delete the isEmployed property from the person object 

console.log(person); //print everything including the updated person's name and the employment status

person.isEmployed = false;

for (key in person){
    console.log(person[key]);
}