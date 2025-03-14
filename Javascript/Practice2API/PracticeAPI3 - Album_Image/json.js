var albumPhotoApi = "https://jsonplaceholder.typicode.com/photos";
fetch(albumPhotoApi)
.then(function(response){
    return response.json();
})
.then(function(albumPhoto){
    var limitListItems = albumPhoto.filter(function(item){
        return item.id <= 10;
    }).map(function(item){
        return `<p>${item.id}</p>
        <p>${item.title}</p>
        <a href = "#">${item.url}</a>
        <img src="${item.url}" alt="${item.title}">
        `
    })
    var html = document.getElementById("album");
    html.innerHTML = limitListItems.join("")
}).catch(function (err) {
    console.log("Error!");
})