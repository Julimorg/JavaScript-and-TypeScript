//? var
var a = 10;
var a = 20; // có thể ghi đè lại biến
var b = 10;
if ( b > 5)
{
    var b = 20;
    console.log(b);
}
console.log(a);

//? let
let c = 10;
// let c = 20; // không thể khai báo lại biến
c = 20; // có thể gán lại giá trị
console.log(c);
let d = 10;
if ( d > 5)
{
    let d = 20;
    console.log(d);
}
console.log(d);

//? const
const e = 10;
// e = 20; // không thể gán lại giá trị
console.log(e);
const f = 10;
if ( f > 5)
{
    const f = 20;
    console.log(f);
}
console.log(f);
