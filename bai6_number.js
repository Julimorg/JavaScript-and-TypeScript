//? Create number with variable
var age = 18;
var PI = 3.14;

//? Create number with Object
var otherNumber = new Number(10);
console.log(typeof otherNumber);

//?Check value with isNaN
// Trong JavaScript, khi thực hiện các phép toán giữa các kiểu dữ liệu khác nhau, ngôn ngữ này tự động thực hiện ép kiểu (type coercion) để cố gắng chuyển đổi các giá trị sang kiểu phù hợp cho phép toán.

// Giải thích:
// Phép toán của bạn:

// javascript

// var result = 20 / '31';
// Ở đây:

// 20 là một số (number).
// '31' là một chuỗi (string).
// Cơ chế ép kiểu trong JavaScript:

// Khi gặp phép chia /, JavaScript sẽ cố gắng chuyển cả hai toán hạng về kiểu số (number) nếu có thể.
// Chuỗi '31' có thể được chuyển thành số 31 (vì nó là một chuỗi số hợp lệ).
// Sau khi ép kiểu, phép tính trở thành:
// javascript
// var result = 20 / 31; // = 0.6451612903225806
// Tại sao trong video kết quả là NaN?

// Nếu chuỗi không thể chuyển đổi thành một số hợp lệ, JavaScript sẽ trả về NaN (Not-a-Number). Ví dụ:
// javascript
// var result = 20 / 'abc'; // NaN
// Trong video bạn xem, có thể chuỗi không phải là '31' mà là một chuỗi không hợp lệ như 'thirty-one' hoặc một giá trị khác không thể chuyển đổi thành số.
// Khi nào trả về NaN?

// Nếu JavaScript không thể ép kiểu một toán hạng về kiểu số, kết quả của phép toán sẽ là NaN.
// Kiểm tra hiện tại của bạn: Kết quả của bạn là số vì '31' là một chuỗi có thể chuyển thành số hợp lệ. Đây là một hành vi bình thường trong JavaScript.


var result = 20 / 'dqw';
console.log(isNaN(result));


//? To String
var myAge = 21;
console.log(myAge.toString());

//? toFixed --> làm tròn số thập phân
var PI = 3.14;
console.log(PI.toFixed());

//? Practice 1
function isNumber(value)
{
  return typeof value === "number";   
}
// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

//? Practice 2

function isNumber(value)
{
    return typeof value === 'number' && !isNaN(value);
}
// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false
