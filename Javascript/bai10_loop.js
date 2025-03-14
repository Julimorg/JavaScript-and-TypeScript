for( var i = 0 ;i <= 10 ; i++)
{
    console.log(`a[${i}] : ` + i);
}
//? Practice 1
function getRandomNumbers(min,max,length)
{
    var arr = [];
    for(var i = 0 ; i < length ; i++)
    {
        arr.push(Math.floor(Math.random() * (max - min) + min));
    }
    return arr;
}
console.log(getRandomNumbers(0,100,100));

//? Practice 2

function getTotal(arr)
{
    var sum = 0;
    for(var i = 0 ; i < arr.length; i++)
    {
        sum +=  arr[i];
    }
    return sum;
}
// getTotal([1, 2, 3]) // Output: 6
// getTotal([4, 5, -3]) // Output: 6
// getTotal([4, 5, 3, 5]) // Output: 17
console.log(getTotal([4, 5, 3, 5]));


var myArray = [
    "JavaScript",
    "is",
    "a",
    "programming",
    "language"
]

for (var i = 0; i < myArray.length; i++)
{
    console.log(myArray[i]);

}

//? Practice 3
var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
function getTotal(orders)
{
    var sum = 0;
    for(var i = 0 ; i < orders.length; i++)
    {
        sum += orders[i].price;
    }
    return sum;
}



// Expected results:
getTotal(orders) // Output: 8700000
console.log(getTotal(orders));

//? For in

var myInfo = {
    name: "Fong",
    age : 18,
    address: "Binh Duong"
}

for(var key in myInfo)
{
    console.log(myInfo[key]) // display value in object
    console.log(key)// display key in object
}


//? Practice 4
function run(object) {
    var arr = []
    for( var key in object)
    {
        arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`)  
    }
    return arr;
        
}
// Expected results:
console.log(
    run(
        {
             name: 'Nguyen Van A', 
             age: 16
             }
            )
        );
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]