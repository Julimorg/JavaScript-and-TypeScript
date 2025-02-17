var albumApi = "https://jsonplaceholder.typicode.com/albums";

fetch(albumApi)
.then(function(response){
    return response.json();
})
.then(function(albums){
    var htmls = albums.map(function(album){
        return `<h2>${album.userId}</h2>
        <h3>${album.id}</h3>
        <p>${album.title}</p>
        `;
    })
    var list = document.querySelector(".listAlbum");
    list.innerHTML = htmls.join('');
    return albums; // trả về albums để then tiếp theo có thể lấy data để sử dụng
})
.then(function(albums){
    //? Lấy ra album có tên dài hơn 10 ký tự và output ra html
    var name = albums.filter(function(album){
        return album.title.length > 70;
    }).map(function(album){
        return `
        <p>${album.title}</p>
        `;
    })
    var listName = document.querySelector(".nameList");
    listName.innerHTML = name.join('');

}).catch(function(err){
    console.log("Error!");''
})
