const obj = {
    name: "Athena",
    age: 3,
    sayHello: function() {
        return "hello";
    },
    career: { }
}

obj.name = "tim"
obj.newProp = [1, 2]

obj["name"] //bracket notation

//delete obj.career

console.log(Object.values(obj))

for (let key in obj){
    console.log(key)
}

const obj2 = {
    hairColor: "black",
    arr: [1, 2, 3],
    name: "Cat" //override the value of Athena to Cat
}

const obj3 = {...obj, ...obj2}
console.log(obj3)

obj3.career.infor = "tech"
console.log(obj, obj3)

obj2.hairColor = "brown"
console.log(obj2, obj3)

const {hairColor, name} = obj3
console.log(hairColor, name)