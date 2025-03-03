

var userApi = "http://10.11.77.106:3000/api/v1/user";

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
    })
    .then(data => {
        console.log("API Response:", data); // Kiểm tra dữ liệu nhận được
        callback(data);
    })
    .then(callback);
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
    var userArr = users.data; // Lấy mảng từ trong object

    if (!Array.isArray(userArr)) {
        console.error("Users is not an array:", users);
        return;
    }

    var listUser = document.querySelector('#list-users');
    var htmls = userArr.map(function(user){
        return `<li data-id = "${user.id}">
            <h1>${user.first_name}</h1>
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