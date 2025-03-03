console.log("Progess Start");
setTimeout(() => {
    console.log("Step 2 ");
},0)
Promise.resolve("Resolved promise").then(response => {
    console.log(response);
})
Promise.resolve("Resolve promise 2").then(response => {
    for(let i = 0; i < 1000000000; i++){}
    console.log(response);
})
console.log("End");