// let testpromise = new Promise((resolve, reject) =>{
//     let callApi = true;
//     setTimeout(() => {
//         if(callApi){
//             resolve("sau 2s : Đã gọi API thành công ");
//         }else{
//             reject("sau 2s : Gọi API thất bại");
//         }
//     },2000)
// })

// console.log(testpromise);


// testpromise
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log("Finished");
//     })

//? Ví dụ với API thực tế
const api = "https://pokeapi.co/api/v2/pokemon/"
const getListPokemon = (limit = 10) => {
    return fetch(`${api}?limit=${limit}`, {
        method: "GET",
    })
    .then(rawResponse => {
        console.log("Raw response: " + rawResponse);
        rawResponse.json()
        .then(pokemon => {
            console.log("Pokemon list: ", pokemon);
        })
    })
    .catch(error => {
        console.log("Error: ", error);
    })
    .finally(() => {
        console.log("Done!");
    })

}
getListPokemon(20);