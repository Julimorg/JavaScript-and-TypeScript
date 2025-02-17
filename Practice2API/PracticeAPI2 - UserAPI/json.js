var userApi = "https://jsonplaceholder.typicode.com/users";

fetch(userApi)
.then(function(response){
    return response.json();
})
.then(function(users){
   var listUser = users.map(function(user){
        return `<h3>${user.name} - ${user.username}</h3>
        <p>Email : ${user.email}</p>
        <p>Address Detail: 
            <li>${user.address.street}</li>
            <li>${user.address.suite}</li>
            <li>${user.address.city}</li>
            <li>${user.address.zipcode}</li>
            <li>${user.address.geo.lat}, ${user.address.geo.lng}</li>
        </p>
        <p>Phone: ${user.phone}</p>
        <a href = "#"> ${user.website}</a>
        <p>Company: ${user.company.name}</p>
        `; 
    });
    var takeClass = document.querySelector("#user-list");
    takeClass.innerHTML = listUser.join('');
    return users;
})
//? 
.then(function(users){
}).catch(function(err) {
    console.log(err);
})