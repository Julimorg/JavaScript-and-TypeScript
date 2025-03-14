
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
// var boxNode = document.querySelector(".box-1");
// console.log(boxNode.getElementsByTagName("li"));

//* 4 getAttribute . setAttribute
var headingElement = document.querySelector("h4");
var headingMoreElement = document.querySelector("h5");
headingElement.title = "Heading";
headingMoreElement.setAttribute("id", "more-heading");
headingMoreElement.setAttribute("title", "Heading");
var checkAttribute = headingElement.getAttribute("title");
console.log(checkAttribute);
console.log(headingMoreElement);

var titleText = document.querySelector("h1");
titleText.setAttribute("title","F8 - Học lập trình để đi làm");
titleText.setAttribute("data-title","F8 - Học lập trình để đi làm");
var linkText = document.querySelector("a");
linkText.href = "https://fullstack.edu.vn/";
linkText.setAttribute("target","_blank");
console.log(titleText);
console.log(linkText);

//* 5 InnerText / TextContent
headingMoreElement.textContent = "xinchao adding Link";
titleText.textContent = "F8 - Học lập trình để đi làm";


//* 6 InnerHTML / OuterHTML
titleText.outerHTML = '<h3 class ="hi">More F8 </h3>';
// render(`
//     <li>Khóa học HTML</li>
//     <li>Khóa học JS</li>
//     <li>Khóa học PHP</li>
// `)
// function render(html)
// {
//     var addingList = document.querySelector("ul");
//     return addingList.innerHTML = html;

// }
var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var addingList = document.querySelector("ul");
    addingList.innerHTML = courses.map(function(course)
    {
        return `<li>${course}</li>`
    }
).join('');
}
console.log(render(courses));

//* 7 DOM Style
var checkAnchor = document.querySelector("a");
checkAnchor.style.backgroundColor = "red";

var colorText = document.querySelector(".red");
Object.assign(colorText.style,
  {
    backgroundColor: "#f00"
  }
)
var checkP = document.querySelector("p");
checkP.style.color = "#f05123";

//* ClassList Properties
//? add, contains, remove, toggle
var addingClassIntoH1 = document.querySelector(".boxCon > h1");
addingClassIntoH1.classList.add("title");
var addingClassIntoP = document.querySelector(".boxCon > p");
addingClassIntoP.classList.remove("sub-title");
addingClassIntoP.classList.add("content");

//* DOM events
//? Event handlers Event listeners

var checkClick = document.querySelectorAll(".boxCon");

for(let i = 0; i < checkClick.length ; i++)
{
  checkClick[i].onclick = function(e)
  {
    console.log(e.target);
  }
}

//? Select Box
var selectBox = document.querySelector("select");
selectBox.onchange = function(e)
{
  var takeValue = document.querySelector(".takeSelectValue");
  takeValue.textContent = e.target.value;
}

//? input text
var inputElement = document.querySelector("input[type='text']");
inputElement.oninput = function(e)
{
  var textValue = document.querySelector(".takeTextValue");
  textValue.textContent =  e.target.value;
}

//? check box
var checkBoxValue = document.querySelector("input[type='checkbox']");
checkBoxValue.onchange = function(e)
{
  var takeValue = document.querySelector(".takeCheckValue");
  if (e.target.checked === true)
  {
    takeValue.textContent = "Check Box is checked";
  }else
  {
    takeValue.textContent = "Check Box is not checked";
  }
}

//* Event Listener
var clickButton = document.querySelector(".myButton");
clickButton.addEventListener("click", function(e)
  {
    console.log("Button Clicked");
  }
)