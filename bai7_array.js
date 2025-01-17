
var languages = [
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    null,
    1,
    1.41,
    function()
    {

    },
    {},
]

//? Check isArray
console.log(Array.isArray(languages));

//? Check length of Array
console.log(languages.length);

//? Querry elements in Array
console.log(languages[3]);


//** Keyword: JS Arrays methods */

var arr = [
    "JavaScript",
    "Java",
    "Python",
    "Ruby",
    "C++"
]
//? Change Array to String
console.log(arr.toString());

//? Join 
//? Thay vì split() biến String thành Array
//? Thì join() sẽ biến Array thành String nhưng có thêm những kí tự mà ta muốn

console.log(arr.join()); // kết quả: JavaScript/Java/Python/Ruby/C++
console.log(arr.join(', ')); // kết quả: JavaScript, Java, Python, Ruby, C++
console.log(arr.join(' - ')); // kết quả: JavaScript - Java - Python - Ruby - C++
console.log(arr.join(' || ')); // kết quả: JavaScript || Java || Python || Ruby || C++
console.log(arr.join(' : ')); // kết quả: JavaScript : Java : Python : Ruby : C++
console.log(arr.join('/'));


//? Pop sẽ xóa index ở cuối Array và trả về index đã xóa
//? nếu ta xóa hết toàn bộ elements trong Array thì value return là undefined
console.log(arr.pop());
console.log(arr.pop()); // lại xóa thêm 1 index

console.log(arr);

//? Push thêm elements ở cuối Array 

console.log(arr.push("Hi"));
console.log(arr);

//? Shift sẽ xóa elements ở đầu Array và trả về elements đã xóa
//? nếu ta xóa hết toàn bộ elements trong Array thì value return là undefined

console.log(arr.shift());
console.log(arr);

//? Unshift thêm elements ở đầu Array

console.log(arr.unshift("Hello"));
console.log(arr.unshift("Fong"));
console.log(arr);

//? Splice thay đổi Array bằng cách xóa , thêm elements trong Array th

console.log(arr.splice(2)); // Chọn index mong muốn rồi xóa element của index đó
console.log(arr.splice(1,2)); // Chọn từ index tới index mà mính muốn và xóa những element nằm trong phạm vi index đó

//? Đây là cách chèn index mà mình mong muốn

arr.splice(1,1,"chen");//Vị trí đặt con trỏ, Index mà mình muốn xóa, index mà mình muốn chèn
console.log(arr);

//? Concat hợp nhất các array
var language1 =[
    'Java',
    'Python',
    'Ruby',
    'C++'
]
var language2 = [
    'JavaScript',
    'Java',
    'C#',
    'Go'
]
var language3 = [
    'Swift',
    'Kotlin',
    'Rust',
    'Go'
]

console.log(language1.concat(language2).concat(language3));

//? Slice cắt 1 nhiều hoặc toàn bộ element trong Array

console.log(language1.slice(1,3)); // Cắt từ index 1 đến index 3
console.log(language1.slice()); // Cắt từ đầu đến cuối

//? Practice 1

function joinWithCharacter(array, charactor) {
    return array.join(charactor);
}



// Ví dụ khi sử dụng
var cars = ['Honda', 'Mazda', 'Mercedes'];

var result = joinWithCharacter(cars, ' - ');

console.log(result); // Expected: "Honda - Mazda - Mercedes"

//? Practice 2
function getLastElement(animals){

    let x = animals.slice(animals.length-1);
    
    return x;
    
    }
// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);
console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

//? Practice 3
function getFirstElement (animals){

    let x = animals.slice(0,1);
    
    return x;
    
}


// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getFirstElement(animals);

console.log(result); // Expected: "Monkey"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']