var postAPi = "https://jsonplaceholder.typicode.com/posts";

//? Stream
fetch(postAPi).then(function(response){
    return response.json(); // nó sẽ parse JSON tại đây
}).then(function(posts){
   var htmls = posts.map(function(post){
        return `<li>
        <h1>${post.userId}</h1>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        </li>`
   });
  
   var list = document.querySelector("#box-container");
    list.innerHTML = htmls.join('');
}).catch(function(err){
    console.log("Error!");
})