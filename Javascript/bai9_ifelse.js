
//? If else statements
function run(a)
{
   if ( a %  15 === 0)
   {
    return 3
   }else if ( a % 5 === 0 )
   {
    return 2;
   }else if (a % 3 === 0 )
   {
    return 1;
   }
}
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3

//? Switch

var date = 2;
switch(date)
{
    case 2 :
        console.log("Today is Tuesday");
        break;
    default:
        console.log("Today is not Tuesday");
        break;
}

//? Practice 1
function run(fruits) {
    var result;

    switch (fruits) {
        case "Banana": 
            result = "This is a Banana";
            break;
        case "Apple":
            result = "This is an Apple";
            break;
    }

    return result;
}
//? Practice 2 
function run(fruits) {
    var result;

    switch (fruits) {
       case "Banana":
            result = "This is a Banana";
        case "Apple":
            result = "This is an Apple";
            break;
        default:
            result = "No fruits";
            break;
    }

    return result;
}
var course = {
    name: "Computer Science",
    instructor: "Dr. John Doe",
    duration: "4 years",
    prerequisites: ["Mathematics", "Physics"],
    students: 201
}
// var checkstudent = course.students > 200 ? alert("Studen onboard") : alert("Student already");
function getCanVoteMessage(age)
{
    return age >= 18 ? "Bạn có thể bỏ phiếu" : "Bạn chưa được bỏ phiếu";    
}
// Kỳ vọng
console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
// console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'