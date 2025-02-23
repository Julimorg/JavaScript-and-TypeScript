// function myFunction(param){
//     param();
// }

// function myCallBack(value)
// {
//     console.log("Value :", value);

// }
// myFunction(myCallBack); // Call the function

//? Practice 1
function sumCb(a, b) {
    return a + b;
}
function subCb(a,b)
{
    return a - b;
}
function multiCb(a,b)
{
    return a * b;
}
function divCb(a,b)
{
    return a / b;
}
function caculate(a, b, cb) {
    return cb(a, b);
}
console.log(caculate(1,2,sumCb));
console.log(caculate(1,2,subCb));
console.log(caculate(1,2,multiCb));
console.log(caculate(3,1,divCb)); 

// Expected results
// caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3

var course = [
    "JavaScript",
    "PHP",
    "Ruby",
]
var DetailCourse = [
    {
        id: 1,
        name: "HTML",
        description: "Learn HTML",
        duration: 3,
        coin: 250,
        coinText: "Gia :  0",
    },
    {
        id: 2,
        name: "CSS",
        description: "Learn CSS",
        duration: 2,
        coin: 0,
        coinText: "Gia :  1",
    },
    {
        id: 3,
        name: "JavaScript",
        description: "Learn JavaScript",
        duration: 1,
        coin: 0
    },
    {
        id: 4,
        name: "Java",
        description: "Learn Java",
        duration: 4,
        coin: 400
    },
    {
        id: 5,
        name: "React",
        description: "Learn React",
        duration: 4,
        coin: 500
    }
]

console.log(htmls);
//? Cách hoạt động của map()
Array.prototype.myMap = function(callBack)
{
    var arr = [];
    for(let i = 0; i < this.length ; i++ )
    {
        var result = callBack(this[i],i);
        arr.push(result);
    }
    return arr;
}
//? Cách Hoạt động của reduce()
Array.prototype.myReduce = function(callback,result)
  {
    let i = 0 , arr = [];
    if (arguments.length < 2)
    {
        i = 1;
        result = this[0];
    }
    for (; i < this.length; i++)
    {
        result = callback(result, this[i], this);
    }
    return result;
  }
//? Cách hoạt động find()
Array.prototype.myFind = function(callback, index) {
    if (index === undefined) {
        index = 0;
    }

    let arrLength = this.length;

    for (; index < arrLength; index++) {
        if (callback(this[index], index, this)) return this[index];
    }

    return undefined;
};
//? Cách hoạt động của filter()
Array.prototype.myfilter = function(callback,index) {
    let arrLength = this.length;
    for(; i < arrLength; i++)
    {
        return this[index];
    }
}
//? Cách hoạt động của ForEach()

//? CallBack Function
const checkFilter = DetailCourse.filter(function(course,index) // Filter()
    {
        return course.duration > 2;
    }
)

const checkFind = DetailCourse.myFind(function(courses,index) // Find()
  {
    console.log(courses[index]);
    if(courses.duration > 2)
    {
        return courses;
    }
  }
)
const checkReduce = course.myReduce(function(total,number) // Reduce()
  {
      return total + number;
  })
 course.forEach(function(course,index,array) // ForEach()
  {
    console.log(course,index, array);
    return 
  }
)

var htmls = course.myMap(function(course)
    {
        return `<h2> ${course} </h2>`;
    }
)
console.log("My Map: ", htmls);
console.log("-".repeat(50));
console.log("My Reduce: ", checkReduce);
console.log("-".repeat(50));
console.log("My Find: " , checkFind);
console.log("-".repeat(50));
console.log("My Filter: ", checkFilter);
console.log("-".repeat(50));
// console.log("My ForEach: ", checkForEach);


//?Practice
const numbers = [1, 2, 3];

Array.prototype.myMap2 = function(cb) {
    var arr = [];
    for(let i = 0; i < this.length ; i++ )
    {
        var result = cb(this[i],i);
        arr.push(result);
    }
    return arr;
}

// console.log(numbers.myMap2(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]

console.log(numbers.myMap2(function (number, index) {
    return number * index;
})) // Output: [0, 2, 6]