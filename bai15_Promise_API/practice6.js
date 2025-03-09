const imgContainer = document.querySelector(".images");

const createImage = function(imgPath){
    return new Promise(function(resolve, reject){
        const img = document.createElement("img");
        img.src = imgPath;

        img.addEventListener("load", function(){
            imgContainer.append(img);
            resolve(img);
        })  
        img.addEventListnener("error", function(){
                reject(new Error("Image not found "));
        })
    })
};

createImage("./assets/vagabond1.jfif").then(img => {
    console.log(img);
})