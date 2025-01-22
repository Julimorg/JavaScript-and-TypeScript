//? For of
var languages = [
    'JavaScript',
    'Java',
    'Python',
    'Ruby',
    'C++'
];
for( var valueArr of  languages ) {
    console.log(valueArr);
}
//? For in
var myInfo = {
    name: "Fong",
    age : 21,
    address: "Ha Noi",
    getAge: function(){
        return this.age;
    }
};
for ( var value of Object.values(myInfo))
{
    console.log(value);
}

//? While loop
var i = 1;
while( i < 10)
{
    console.log(i);
    i++;
}
var arr = [
    "Javascript",
    "PHP",
    "Java",
    "Ruby",
    "C++"
];
var i =  1;
while( i <= arr.length)
{
    console.log(arr[i]);
    i++;
}
//? Do while
var i = 1;
do
{
    i++;
    console.log(i);
}while(i<=2);

//? Nested Loop

var myArr = [
    [1,2],
    [3,4],
    [5,6]
]

for(var i = 0 ; i < myArr.length; i++ )
{
    for(var j = 0 ; j < myArr[i].length; j++)
    {
        console.log(myArr[i][j]);
    }
}

//?Another practice
for( var i = 0 ; i < 20; i+=5)
{
    console.log(i);
}

//? Recursion
function countDown(num){
    if ( num >= 0)
    {
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}
countDown(10);



//* Object 2 - Array Method
//* forEach() 
//* every()
//* some()
//* find()
//* filter()
//* map()
//* reduce()

var courses = [
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
//? For Each
courses.forEach(function(course,index)
{
    console.log(index ,course);
});

//? every()
 var isFree = courses.every(function(course,index)
{
    console.log(index);
    return course.coin === 0;
}
)
console.log(isFree);
//? some()
var isCoin = courses.some(function(course,index)
{
    console.log(index);
    return course.coin === 400;
})
console.log(isCoin);
//? find()
var isFindObject = courses.find(function(course,index)
{
    return course.coin === 0;
})
var isCourseFound = courses.find(function(course,index)
{
    return course.id === 1;
}
);
// if (isCourseFound === undefined)
// {
//     alert("Your course is not found");
// }else 
// {
//     alert(`Your course is found ` );
// }
var filter = courses.filter(function(course,index)
{
    if ( course.id <= 3)
    {
        return course;
    }
})
console.log(filter);
console.log(isCourseFound);
console.log(isFindObject);

//? Practice 2
// // const sports = [
// //     {
// //         name: 'Bóng rổ',
// //         like: 6
// //     },
// //     {
// //         name: 'Bơi lội',
// //         like: 5
// //     },
// //     {
// //         name: 'Bóng đá',
// //         like: 10
// //     },
// // ]
// function getMostFavoriteSport(sports)
// {
//     var arr = [];
//    var checkLike = sports.filter(function(sport,index)
//     {
//         return sport.like > 5;
//     }
// )
//     return arr = checkLike;
// }

// // Kỳ vọng
// console.log(getMostFavoriteSport(sports));
// // Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]


//? map()
// Cách viết 1
// var newCourses = courses.map(function()
// {
    
// });
// Cách viết 2
function courseHandler(course,index)
{   
    return{
        id: course.id,
        name: course.name,
        coint: course.coin,
        coinText: "Giá : " + course.coin,
        index: index,
    };

};
var myCourses = courses.map(courseHandler);
console.log(myCourses);


//? reduce()
var i = 0;

function coinHandler(accumulator,currentValue, currentIndex, orriginArray)
{
   i++;
   var total = accumulator + currentValue.coin;
   console.table(
    {
        "ID " : i,
        "Biến lưu trữ " : accumulator,
        "Giá trị khóa học" : currentValue.coin,
        "Tích trữ " : total,
    }
   )
   return 100;
}
var totalCoin = courses.reduce(coinHandler, 0);

//? Practice 3

var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
] 
//? Cách tính thủ công --> Khá đơn giản và dễ hiểu
// function getTotalGold(sports)
// {
//     let sum = 0;
//    for( const value of sports){
//     sum += value.gold;
//    }
//    return sum;
// }

//? Cách tính sử dụng Reduce 
function getTotalGold(sports)
{
    var totalGold = sports.reduce(function(gold, value)
    {
        console.table(
            {
                "Value: " : value.gold,
            }
        )
    }, 0);
    return totalGold;
}
// Expected results:
console.log(getTotalGold(sports)) // Output: 23






