//? Cách 1 tạo object
let developer = {
    username: "Fong",
    age: 21,
    greet: function(){
        console.log(`Hi dqw, my name is ${this.username}`);
    },
    skills:["javascript","react","Node.js","Express"],
    position:{
        frontEnd:["React","Node.js","Express"],
        backEnd:["Node.js","Express"],
        fullStack:true,
    }
}
//? Cách 2 tạo object

let dev2 = new Object()
{
    dev2.username = "Fong",
    dev2.age = 21,
    dev2.greet = function()
    {
        console.log(`Hi dqw, my name is ${this.username}`);
    }
    dev2.skills =["javascript","react","Node.js","Express"],
    dev2.position={
        frontEnd:["React","Node.js","Express"],
        backEnd:["Node.js","Express"],
        fullStack:true,
    }
}
console.log(dev2);
console.log("-".repeat(20));
//? Cách truy cập vào thuộc tính của object
console.log(developer.username);
console.log(developer["username"]);

//? CRUD thuộc tính của Object
developer.gender = "male"; // Create 
developer.age = 22;
delete developer.position;

