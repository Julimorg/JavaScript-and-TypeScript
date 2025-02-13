var postAPi = "https://jsonplaceholder.typicode.com/posts";

//? Stream
fetch(postAPi)
  .then(function(response){
    return response.json(); // JSON parse: JSON nó sẽ thực hiện json parse chỗ này
})  
  .then(function(post){
    var htmls = post.map(function(post){
      return `<li>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
              </li>`;
    });
    var html = htmls.join('');
    document.getElementById("box-container").innerHTML = html;
  })
  .catch(function(error){
    console.error('Error:', error);
  });