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


