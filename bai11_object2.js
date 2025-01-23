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

var totalCoin = courses.reduce(function(total, course)
{
    i++;
    console.log(i,total,course);
    return total + course.coin;
}, 0)
console.log(totalCoin); 


var numbers  = [100,200,220,200,480];

var sum = numbers.reduce(function(firstNum,value)
{
    return firstNum + value;
});
console.log(sum);

//? Flat - làm phẳng Aray từ Depth Array ( mảng sâu)
var depthArray = [1,2,[3,4],5,6,[7,8,9]];

var sumdepth = depthArray.reduce(function(first,value)
{
    return first.concat(value);
},[]);
var checkSum = sumdepth.reduce(function(num, sum)
{
    return num + sum;
}
);
console.log(checkSum);

//? Lấy ra các khóa học đưa vào 1 mảng mới
var topics = [
    {
        topic: "Front-End",
        course :[
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "Javascript",
            }
        ]
    },
    {
        topic: " Back-end",
        course :[
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS",
            }
        ]
    }
]
var newCourses = topics.reduce(function(course, topic)
{
    return course.concat(topic.course);

},[])
console.log(newCourses);
//? --> Show ra HTML
var html = newCourses.map(function(course)
{
    return ` 
    <div>
    <h2> ${course.title}<h2>
    <h2> ID: ${course.id}<h2>
    <div> ` 
}
)
console.log(html);
//? Practice 4
var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
  

console.log(filter);
  function calculateRating(watchList) 
  {
    const filter = watchList.filter(function(name)
    {
        return name.Director === "Christopher Nolan";
    })
    const checkImdb = filter.reduce(function(imdb,value)
    {
        return (imdb + Number(value.imdbRating)) ;
    },0);
    return checkImdb / filter.length;
  }

  // Expected results
  console.log(calculateRating(watchList)); // Output: 8.675
  
  //? Cách reduce hoạt động 
  const listnum = [1,2,3,4,5,6];
  Array.prototype.reduce2 = function(callback,result)
  {
    let i = 0;
    if (arguments.length < 2)
    {
        i = 1;
        result = this[0];
    }
    for (; i < this.length; i++)
    {
        result = callback(result, this[i], this)
    }
    return result
  }
  const check = listnum.reduce2(function(total,number)
{
    return total + number;
})
  
  console.log(check);
  
//? Practice 5

var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
function arrToObj(arr)
{
   return arr.reduce(function(obj,value)
    {
        obj[value[0]] = value[1];
        return obj;
    }, {}   
)
}
 

console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }



//? String / Arrays include()
 const course = ["Javascript", "PHP", "Java" , "C/C++"]
 const checkValue = course.includes("Java");
 console.log(checkValue);

  
  



