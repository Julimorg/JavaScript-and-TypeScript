
//* [1]
const firstName = 'Jian';
const lastName = 'Fong';
const fullName = firstName + " " + lastName;
var age = 16;
var canBuyAlcohol = false;
if ( age < 18)
{
    !canBuyAlcohol;
}else
{
    canBuyAlcohol;
}
var id = Symbol('1');
var id2 = Symbol('2');

//? Function
// var myFunction = function()
// {
//     alert("Hello World");
// }
// myFunction();\
//?Object
// var myObject ={
//     name: 'Jian Fong',
//     age: 18,
//     address: "HaNoi",
//     myFunction: function()
//     {

//     },
// };
// console.log(myObject);
//? Array
// var myArray = [
//     'Javascript',
//     'Function',
//     'Object',
// ];
// console.log(myArray);
// console.log(typeof id);

//? === and !==
// var a = 1;
// var b = "1";
// var c = a === b ? 1 : 0;
// console.log(c);

// console.log(Boolean(1));
// console.log(Boolean(document.all));
// console.log("-----------");

// var a = 1;
// var b = 2;
// var result = a < 0 && a < b;
// console.log(result);

//* [2]
//? Function

function showDialog()
{
    alert("Hello World");
}
var name = "Jian Fong";
var age = 22;
function writelog(name,age)
{
    console.log("Hello " + name + " " + age);
}

// writelog(name,age);
//? For loop
function checkargument()
{
    var myString = '';
    for(var param of arguments)
    {
        myString += `${param} - `
    }
    console.log(myString);
}

// checkargument("Jian", "Fong");
// var isconfirm = confirm("Please enter");
// console.log(isconfirm);

//* [3]
//? -- Function ---
// var a = 1;
// var b = 5;
// function cong(a,b)
// {
//     return a + b;
// }
// var result = cong(a,b);
// console.log(result);

// function triple(x)
// {
//     return x * 3 ;
// }
// var result = triple(3);
// console.log(result);


// Function Overload
// function showMessage(x,y)
// {
//     console.log(x+y);
// }
// function showMessage()
// {
//     console.log("Overload1");
// }
// function showMessage()
// {
//     var fullName = "Fong";
//     console.log("Hello " + fullName);

// }
// function showMessage()
// {
//     console.log("Overload2");
// }

// showMessage();

//Expression Funtion
var myFunction = function()
{
    console.log("helo function");
}

myFunction();

