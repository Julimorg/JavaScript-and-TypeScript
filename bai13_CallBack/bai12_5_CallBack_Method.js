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
var myCourses = [
    {
        name: "Java",
        coin: 410,
        isFinish: true,
    },
    {
        name: "dqw",
        coin: 41410,
        isFinish: true,
    },
    {
        name: "eq",
        coin: 4155,
        isFinish: true,
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
Array.prototype.myfilter = function(callback) {
    var arr = [];
    for(var index in this)
    {
        if ( this.hasOwnProperty(index))
        {
           var result = callback(this[index],index, this);
           if(result)
           {
            arr.push(this[index]);
           }
        }
    }
    return arr;
}
//? Cách hoạt động của ForEach()
Array.prototype.myForEach = function(callback)
{
    for(let index in this) 
    {
        if(this.hasOwnProperty(index))
        {
            callback(this[index],index,this)
        }
    }
}
//? Cách hoạt động của mySome()
Array.prototype.mySome = function(callback)
{ 
    var output = false;
    for(let index in this)
    {
       if(this.hasOwnProperty(index))
       {
          if(callback(this[index],index,this) )
          {
            output = true;
            break;
          }
       }
    }
    return output;
}
//? Cách hoạt động của every()
Array.prototype.myEvery = function(callback)
{
    var output = true;
    for(let index in this)
    {
       if(this.hasOwnProperty(index))
       {
          if(!callback(this[index],index,this) )
          {
            output = false;
            break;
          }
       }
    }
    return output;
}
//? CallBack Function
const checkFilter = DetailCourse.filter(function(course,index) // Filter()
    {
        return course.duration > 0;
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
 const checkForEach = course.myForEach(function(course,index,array) // ForEach()
  {
    console.log(course,index, array);
    return 
  }
)
const checkSome = DetailCourse.mySome(function(course,index,array) // some()
    {
        return course.duration === 2;
    }
)
const checkEvery = myCourses.myEvery(function(course,index,array) //every()
    {
        return course.isFinish ;
    }
) 
var htmls = course.myMap(function(course) //map()
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
console.log("My ForEach: ", checkForEach);
course.myForEach(function(course,index, array) // ForEach()
{
  console.log(course,index,array);
  return 
}
)
console.log("-".repeat(50));
console.log("My Some: ", checkSome);
console.log("-".repeat(50));
console.log("My Every: ", checkEvery);



const numbers = [1, 3, 3, 5];
Array.prototype.myEvery3 = function(cb) {
    var check = true;
    for(let index in this)
    {
        if(this.hasOwnProperty(index))
        {
            if(!cb(this[index],index, this))
            {
                check = false;
                break;
            }
        }
    }
    return check;
}
console.log(numbers.myEvery3(function (number) {
    return number % 2 !== 0;
}));

// Expected results

// const numbers = [1, 3, 3, 5];

// console.log(numbers.myEvery(function (number) {
//     return number % 2 !== 0;
// })); // Output: true

// console.log(numbers.myEvery(function (number, index) {
//     return index % 2 === 0;
// })); // Output: false

// console.log(numbers.myEvery(function (number, index, array) {
//     return array.length % 2 === 0;
// })); // Output: true

