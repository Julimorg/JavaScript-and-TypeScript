var courses =[
    'Javascript',
    'PHP',
    'Ruby'
];

//? myMap

Array.prototype.myMap = function(callback)
{  
    const output = [];
    
    for( let i = 0 ; i < this.length ; i++ ){
        var result = callback(this[i],i);
        output.push(result);
    }
    return output;
}

var html = courses.myMap(function(course,index){
    console.log(course,index);
})

























// Array.prototype.myMap = function(callback)
// {
//     const courseLength = this.length;
//     var output = [];
//     for(let i = 0 ; i < courseLength; i++)
//     {
//         var result = callback(this[i], i );
//         output.push(result);
//     }
//     return output;
// }

// var html = courses.myMap(function(course){
//    console.log(course);
// })

