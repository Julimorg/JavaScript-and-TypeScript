var courses = [
    {
        id: 1,
        name: "Javascript",
        coin: 250,
    },
    {
        id: 2,
        name: "HTML, CSS",
        coin: 0,
    },
    {
        id: 3,
        name: "Ruby",
        coin: 0,
    },
    {
        id: 4,
        name: "PHP",
        coin: 400,
    },
    {
        id: 5,
        name: "ReactJS",
        coin: 500,
    },
    {
        id: 6,
        name: "Angular",
        coin: 600,
    }
]

//? ForEach
console.log("-".repeat(10) + " For Each " + "-".repeat(10));
courses.forEach(function(value,index,arr){
    console.log(value);
    console.log(index);
    console.log("-".repeat(20));
    console.log(arr);
})

console.log("-".repeat(50));

//? Every()
console.log("-".repeat(10) + " Every " + "-".repeat(10));
var checkPrice = courses.every(function(course){
    return course.coin > 0;
})
console.log(checkPrice);
//? find()
console.log("-".repeat(10) + " Find " + "-".repeat(10));
var checkName = courses.some(function(course){
    return course.name == "Javascript";
})
console.log(checkName);;
//? find()
console.log("-".repeat(10) + " Find " + "-".repeat(10));
var findPrice = courses.find(function(course){
    return course.coin > 250;
})
console.log(findPrice);
//? filter()
console.log("-".repeat(10) + " Filter " + "-".repeat(10));
var filterPrice = courses.filter(function(course){
    return course.coin > 250;
})
console.log(filterPrice);
//? map()
console.log("-".repeat(10) + " Map " + "-".repeat(10));
function coursehandler(course,index){
    return {
        id: course.id,
        name: `Khoa hoc : ${course.name}`,
        coin: course.coin,
        coinText: `Gia : ${course.coin}`,
        index: index,
        origin: course,
    }
}
var newCourses = courses.map(coursehandler)
console.log(newCourses);

function nameHandle(cousrse)
{
    return {
        name: cousrse.name,
    }
}
var newCourseWithName = courses.map(nameHandle);
console.log(newCourseWithName);

//? reduce()
function coinHandler(accumulator, currentvalue)
{
    console.table({
        'Accumulator': accumulator,
        'Current Value': currentvalue.coin,
    })
    return accumulator + currentvalue.coin;

    
}
var totalCoin = courses.reduce(coinHandler, 0);
console.log(totalCoin);


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
function getTotalGold(mySport)
{
    var getTotal = mySport.reduce(function(firstValue,currentValue){
        return firstValue + currentValue.gold;
    },0);
    return getTotal;
}
// Expected results:
console.log(getTotalGold(sports)) // Output: 23






