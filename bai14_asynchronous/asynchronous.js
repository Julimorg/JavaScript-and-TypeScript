//? bất đồng bộ Synchronous
console.log("code 1");
console.log("code 2");
console.log("code 3");

//? bất đồng bộ : đọc file dữ liệu và hiển thị dữ liệu của file
//? Trong thực tế cần phải tốn thời gian để hoành thanh tùy dung lượng file

//? khởi tạo biến để lưu trữ dữ liệu sau khi đọc file xong
let fileData = null
console.log("B1 : bắt đầu đọc file dữ liệu");

//? Khởi tạo function readFileData có nhiệm vụ đọc file, giả lập sẽ tốn 3s (thực tế tùy vào dung lượng file)
const readFileData = (callback) => {
    setTimeout(() => {
        console.log("B2: Đọc file xong, gán dữ liệu vào file Data");
        fileData = " Fong - Fullstack";
        callback(fileData);
    }, 3000);
}
readFileData(() => {
    console.log("B3: Kết thúc quá trình đọc file ", fileData);
}) 

//? ví dụ trên API thực tế
// https://pokeapi.co/api/v2/pokemon/ditto
const getListPokemon = (apiEndpoint,callback) =>{
    const requestAPI = new XMLHttpRequest();
    requestAPI.open("GET", apiEndpoint);
    requestAPI.onload = () =>{
        if (requestAPI.status >= 200 && requestAPI.status <= 299){
            const data = JSON.parse(requestAPI.responseText);
            callback(data);
        }
    }
    requestAPI.send();
}
getListPokemon("https://pokeapi.co/api/v2/pokemon?limit=10",(ResponseData) => {
    console.log("responseData", ResponseData);
    document.getElementById("list-pokemon").innerHTML = ResponseData.results.map(pokemon => `<li>${pokemon.name}</li>`).join('');
})