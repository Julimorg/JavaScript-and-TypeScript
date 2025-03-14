

var userApi = "http://localhost:3000/course-api";

function start()
{
    getUsers(renderUsers);
    handleCreateForm();
}
start()

//? function getUser
function getUsers(callback){
    fetch(userApi).then(function(response){
        return response.json();
    }).then(callback);
}
//? Function createUser with method POST
function createUser(data,callback){
    var option = {
        method: 'POST',
        // Header se giup tranh HTTP payload
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }
    fetch(userApi,option).then(function(response){
        return response.json();
    }).then(callback) 
}

//? function renderUser
function renderUsers(users){
    var listUser = document.querySelector('#list-users');
    var htmls = users.map(function(user){
        return `<li data-id = "${user.id}">
            <h1>${user.name}</h1>
            <p>${user.email}</p>
            <button onclick = "handleDeleteUsers(${user.id})" >Delete</button>
            </br>
        </li>`;
    });
    listUser.innerHTML = htmls.join('');
}
//? Functioon deleteUser with method DELETE

function handleCreateForm() {
    var createBtn = document.getElementById("create");
    createBtn.onclick = function () {
        var name = document.querySelector("input[name='name']").value;
        var email = document.querySelector("input[name='email']").value;
        var formData = {
            name: name,
            email: email
        };
        createUser(formData, function () {
            getUsers(renderUsers);
        });
    };
}