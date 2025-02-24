var albumApi = "https://jsonplaceholder.typicode.com/albums";


function display() {
    getAlbum((albums) => {
        renderAlbum(albums);
        handlerFilterAlbumNameByLargest(albums);
        handlerFilterAlbumNameByLowest(albums);
    });
}
display()

function getAlbum(callback)
{
    fetch(albumApi)
    .then(response => {
        return response.json();
    })
    .then(callback)
    .catch(error => {
        alert("Something went wrong", error);
    })
    .finally(() => {
        console.log("Fetch completed");
    })
}
function renderAlbum(albums){
    var listAlbum = document.querySelector(".listAlbum");
    var htmls = albums.map(album => {
        return `<li>${album.title}</li>`;
    });
    listAlbum.innerHTML = htmls.join("");
}

//? Largest
function handlerFilterAlbumNameByLargest(albums)
{
    var button1 = document.querySelector(".button1");
    button1.addEventListener("click", () => {
        const albumName = albums.filter(album => {
            return album.title.length > 50;
        });
        renderAlbum(albumName);
    })
}

//? Lowest
function handlerFilterAlbumNameByLowest(albums)
{
    var button2 = document.querySelector(".button2");
    button2.addEventListener("click", () => {
      let albumName2 = albums.filter(album => {
        return album.title.length < 50;
      });
      renderAlbum(albumName2); 
    })
}
