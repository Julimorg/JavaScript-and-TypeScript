
//? Get Element by ID
var headingNode = document.getElementById('heading');

console.log({
    element: headingNode,
});

//? Get Element by Class
var headingClassNode = document.getElementsByClassName("Name");
console.log(headingClassNode);

//? Get Element by Tag Name
var checkTag = document.getElementsByTagName("h1");
console.log(checkTag);

//? Get Element by CSS Selector
// var checkSelector = document.querySelector(".box .heading-2:first-child");
var checkSelector = document.querySelectorAll(".box .heading-2");
console.log(checkSelector);

//* 2
var productsListElement = document.querySelector(".products-list");
var firstProductElement = document.querySelector(".products-list .product:first-child");
var buttonElements = document.querySelectorAll(".cta-btn");
console.log(productsListElement, firstProductElement, buttonElements);

//* 3
//? Cách 1
// var listItemNodes = document.querySelectorAll(".box-1 li"); 
// console.log(listItemNodes);
//? Cách 2
var boxNode = document.querySelector(".box-1");
console.log(boxNode.getElementsByTagName("li"));

//* 4
var headingElement = document.querySelector("h4");
headingElement.title = "Heading";
console.log(headingElement);