//*[4]
//? String
var x1 = "Fong";
var x2 =  "Jian";
console.log(`my full name is: ${x1} ${x2}`);
var fulltext = "ew q d q wd q wd q wd q wd q wd";
//? check length of string
console.log(fulltext.length);
//? Find index 
console.log(fulltext.indexOf("q",4));
console.log(fulltext.indexOf("wd",10));
console.log(fulltext.lastIndexOf("q"));
console.log(fulltext.search("d"));
// //? Cut String
    //? Cắt từ trái sang phải
console.log(fulltext.slice(4,7));//Sẽ cắt chuỗi từ index nào đến index nào
console.log(fulltext.slice(3));// cắt chuỗi từ index
    //? cắt từ phải sang trái
console.log(fulltext.slice(-3));
console.log(fulltext.slice(-3, -1));

// //? Replace
// console.log(fulltext.replace("wd", "fong")); // chỉ thay thế 1 giá trị
// console.log(fulltext.replaceAll("wd","fong")); // [1]  thay thế toàn bộ giá trị được chỉ định
// console.log(fulltext.replace(/wd/g,"fong")); // [2]  thay thế toàn bộ giá trị được chỉ định

// //? Cover to UpperCase and lowercase
// console.log(fulltext.toUpperCase());
// console.log(fulltext.toLowerCase());

// //? Trim -> Rất hữu ích trong việc xử lý dữ liệu nhập vào từ người dùng
// var yourName = "    dqwdq dqwdqw dqwdq     ";
// console.log(yourName.trim());  // Xóa khoảng trắng đầu và cuối của String

// //? Split -> Cắt String thành Array
// var language = "JS,PHP,JAVA";
// console.log(language.split(","));

// //? get a char by index
// var myString = "Chen Jian Fong";
// console.log(myString[5]); 

// //? Practice 1
// console.log("-".repeat(50));
// var coursesStr = 'HTML & CSS, JavaScript, ReactJS';
// function strToArray(str) {
//     return str = coursesStr.split(", ");
// }
// // Expected results
// console.log(strToArray(coursesStr)) 

// //? Practice 2
// function getContentLength(content) {
//     return content.length;
// }

// // Mở tab Console để xem kết quả trực quan
// console.log(getContentLength('JavaScript'));
// console.log(getContentLength('Hello World'));

// //? Practice 3
// function getUpperCaseName(fullname)
// {
//     return fullname.toUpperCase();
// }
// console.log(getUpperCaseName("Nguyen van a")) // "NGUYEN VAN A"
// console.log(getUpperCaseName("nGuyen vAn C")) // "NGUYEN VAN C"


