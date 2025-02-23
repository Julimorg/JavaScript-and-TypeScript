const now = new Date()
console.log(typeof now)
console.log("now: " + now)
console.log("now: ", now.toLocaleString());

console.log("-".repeat(20));


//? Với chuỗi ngày 
const specificDate = new Date("2024-11-07 11:11:00");
console.log("specificDate: ", specificDate.toLocaleString());

console.log("-".repeat(20));


//? Với năm, tháng , ngày , giờ , phút, giây
const customDate = new Date(2021, 1, 1, 1,)
console.log("customDate: ", customDate.toLocaleString());

console.log("-".repeat(20));

//? Dùng timstamp
const timestampDate = new Date(1740289798858)
console.log("timestampDate: ", timestampDate.toLocaleString());

console.log("-".repeat(20));


//? Cách lấy từng phần dữ liệu từ 1 object Date;

const currentDate = new Date();
console.log(currentDate.getFullYear());

console.log(currentDate.getMonth() + 1);

console.log(currentDate.getDate());

console.log(currentDate.getHours());

console.log(currentDate.getMinutes());

console.log(currentDate.getSeconds());

console.log(currentDate.getMilliseconds());

console.log("-".repeat(20));


//? Cập nhật các thành phần từ object Date
currentDate.getFullYear(2025);

currentDate.setMonth(11);

console.log("after date: " + currentDate.toLocaleString());

//? Tính toán ngày tháng với Date

//? tính khoảng cách giữa 2 ngày
const startDate = new Date("2024-11-01");
const endDate = new Date("2024-11-06");
console.log(endDate - startDate);
const difDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)); // 8640000 mili giây tương đương với 1 ngày
console.log(difDays);

console.log("-".repeat(20));

//? Thêm hoặc bớt thời gian
const date = new Date();
const month = new Date();
date.setDate(date.getDate() + 5);
month.setMonth(month.getMonth() - 1);

console.log("date: " + date.toLocaleString());
console.log("damonthte: " + month.toLocaleString());


console.log("-".repeat(20));

//? Định dạng dữ liệu Object Date thành String
const formateDate = new Date();

console.log("toISOString: ", formateDate);
console.log("toISOString: ", formateDate.toISOString());

//? toLocaleDateString() vaf toLocaleTimeString() : Định dạng riêng ngày tháng hoặc thời gian theo ngôn ngữ người dùng

console.log("toLocaleDateString: ", formateDate.toLocaleDateString());
console.log("toLocaleTimeString: ", formateDate.toLocaleTimeString());

console.log("toLocaleString: ", formateDate.toLocaleString());

//? toDateString() và toTimeString() trả về ngày hoặc thời gian theo địng dạn người dùng đọc ngắn gọn

console.log("toDateString: ", formateDate.toDateString());
console.log("toTimeString: ", formateDate.toTimeString());

console.log("-".repeat(20));