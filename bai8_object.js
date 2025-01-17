//? Create object with new 

var emailKey = "email"; // Insert new key and value into object

var myInfo =  new Object();
myInfo.myCar = "Porsche";
myInfo.myName = "Chen";
myInfo.myAge = 21;
myInfo.emailKey = "kdqw@gmail.com";
myInfo.getName = function(){
    return this.myName;
}

delete myInfo.myAge; // Delete key and value in Object 

console.log(myInfo);

//? Create object in default way
var anotherInfo = {
    myCar: "Ford",
    myName: "Jane",
    myAge: 22,
    emailKey: "jane@gmail.com",
    getName: function(){
        return this.myName;
    }
}
console.log(anotherInfo);

//? Practice 1
var student = {
    name:  "John",
    age: 21,
    address: "wd1/e1e1",
}
console.log(student);


//? Object Constructor

function User(firstname, lastname, avatar)
{
    this.firstname = firstname;
    this.lastname = lastname;
    this.avatar = avatar;

    this.getName =  function()
    {
        return `${this.firstname} ${this.lastname}`;
    
    }
    
}
var author = new User("Fong", "Chen", "Img");
author.title = "eqeqeq";
console.log(author);
console.log(author.getName());

//? Practice2
function Animal(name,leg,speed)
{
    this.name = name;
    this.leg = leg;
    this.speed = speed;
}

//? Prototype
Animal.prototype.gender =  "male";
Animal.prototype.getGender = function()
{
    return this.gender;
}

var dog = new Animal("Dog",4,"40km/h");
var parrot = new Animal("Parrot",2,"100km/h");
var wolf = new Animal("Wolf",2,"100km/h");
console.log(parrot.getGender());

//? Practice 3
function Student(firstName,lastName)
{
    this.firstName = firstName;
    this.lastName = lastName;
}
Student.prototype.getFullName = function()
{
    return `${this.firstName} ${this.lastName}`;
}

// Ví dụ khi sử dụng
var student = new Student('Long', 'Bui');

console.log(student.firstName);  // 'Long'
console.log(student.lastName);  // 'Bui'
console.log(student.getFullName());  // 'Long Bui'


//? Object Date
var date = new Date();

var day = date.getDate();

var month = date.getMonth() + 1; // getMonth() 0 --> 11

var year = date.getFullYear();

console.log(day, month, year);

//?Practice 4
function getNextYear(year)
{
    var year = new Date();
    return year.getFullYear() + 1;
}
console.log(getNextYear());


//? Math Object 

//?PI
console.log(Math.PI);
//? Round() --> làm tròn số thập phân tùy theo mình
console.log(Math.round(Math.PI));
//? abs() --> giá trị tuyệt đối
console.log(Math.abs(-4));
//? ceil() --> Làm tròn tăng số 
console.log(Math.ceil(4.1));
//? floor() --> làm tròn giảm số
console.log(Math.floor(4.5));
//? random() --> cho ra các giá trị ngẫu nhiên
console.log(Math.floor(Math.random() * 10)); // check số ngẫu nhiên từ 0  - 10

var random = Math.floor(Math.random() * 5);  
var bonus = [
    '10 coin',
    '50 coin',
    '100 coin',
    '500 coin',
    '1000 coin',
    '5000 coin',
];
console.log(bonus[random]);
//? Min - Max
console.log(Math.max(-100,41,12,41,95,1000));
console.log(Math.min(-100,31,3141,12,3,1));
//? Practice 5

var items = ["apple", "banana", "cherry", "orange", "kiwi"];
function getRandomItem(items)
{
    return items[Math.floor(Math.random() * items.length)];
}
console.log(getRandomItem(items));
