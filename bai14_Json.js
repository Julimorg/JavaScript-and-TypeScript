
//? Parse JSON
var myJson = '{"name":"Fong","age":"21"}';

var arrayJson = '["JSON","PHP"]';

console.log(JSON.parse(myJson));
console.log(JSON.parse(arrayJson));
//? Stringify JSon
console.log(JSON.stringify(
    {
        name: "Fong",
        age:21,
    }
))

//? Promise 
var promise = new Promise(
  //Executor
  // resolve reject đều là function
  function(resolve, reject)
  {
    // Logic
    // Logic thành công thì call tới resolve()
    // logic thất bại thì call tới reject()
    // Nếu ko có logic gọi tới resolve hay reject thì Promise
    // sẽ bị treo là dẫn tới MemoryLeak
    // resolve();
    resolve();
  }
);

promise.then(
  //? function sẽ được call khi logic chạy thành công
  function()
  {
    return 1;
  }
)
.then(
  //? function sẽ được call khi logic chạy thành công
  function(data)
  {
    console.log(data);
    return 2;
  }
)
.then(
  //? function sẽ được call khi logic chạy thành công
  function(data)
  {
    console.log(data);
    return 3;
  }
  
).then(
  function(data)
  {
    console.log(data);
  }
)
  //? function sẽ được call để catch các error và output cho người dùng xem
.catch(
  function()
  {
    console.log("Error!");
  }
)
  //? Function sẽ được call khi hoàn thành tác vụ
.finally(
  function()
  {
    console.log("Finally");
  }
)

function sleep(ms)
{
  return new Promise(function(resolve)
  {
    setTimeout(resolve, ms);
  }
)
}
sleep(1000).then(function()
  {
    console.log("Xin chao 1");
    return sleep(1000).then(function()
    {
      console.log("xin chao 2");
    }
  )
  }
);function hell(value, cb) {
    cb(value);
}

// Không sử dụng Promise dẫn đến tạo ra callback hell 
hell(1, function (valueFromA) {
    hell(valueFromA + 1, function (valueFromB) {
        hell(valueFromB + 1, function (valueFromC) {
            hell(valueFromC + 1, function (valueFromD) {
                console.log(valueFromD + 1);
            });
        });
    });
});

//? Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
function notHell(value) {
    return new Promise(function (resolve) {
        resolve(value);
    });
}

notHell(1)
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        console.log(value + 1);
    });

//? Handle Catch Error
function outPutNum(num)
{
  return new Promise(function(resolve)
  {
    setTimeout(resolve, num);
    console.log(Math.random());
  }
)
}
outPutNum(2000).then(function()
  {
    console.log(Math.random());
  }
).then(function(){
  console.log(Math.random());
}).then(function(){
  console.log(Math.random());
}).then(function(){
  return new Promise(function(resolve,reject){
    reject("Something went wrong here!"); //-> sẽ cho ra UnCaught 
  })
}).then(function(){
  console.log(Math.random());
}).catch(function(err){
  console.log(err);
})
//? Promise.all

var promise1 = new Promise(function(resolve){
  setTimeout(function(){
    resolve([1]);
  },2000);
})
var promise2 = new Promise(function(resolve){
  setTimeout(function(){
    resolve([2,3])
  },5000);
})
Promise.all([promise1, promise2]).then(function(result){
  var result1 = result[0];
  var result2 = result[1];
  console.log(result1.concat(result2));
})


//**  Simple Practice
var users = [
  {
    id: 1,
    name: "Fong",
  },
  {
    id: 2,
    name: "Tuan",
  },
  {
    id: 3,
    name: "Phong",
  }
]

var comments = [
  {
    id: 1,
    user_id: 1,
    content: "Good movie",
  },
  {
    id: 2,
    user_id: 2,
    content: "Bad movie",
  },
  {
    id: 3,
    user_id: 3,
    content: "Nice acting",
  }
]

function getComments()
{
  return new Promise(function(resolve){
    setTimeout(function()
  {
    resolve(comments);
  },1000)
  })
}
function getUserbyId(userIds)
{
  return new Promise(function(resolve){
    var result = users.filter(function(user){
      return userIds.includes(user.id);
    })
    setTimeout(function(){
      resolve(result);
    },1000);
  },1000)
}
getComments().then(function(comments){
    var userIds = comments.map(function(comment)
  {
    return comment.user_id;
  });
 return getUserbyId(userIds).then(function(users){
    return {
      users: users,
      comments: comments,
    }
  })}).then(function(data){
  var commentBlock = document.getElementById("comments-box");
  var html = '';
  data.comments.forEach(function(comment){
    var user = data.users.find(function(user){
      return user.id === comment.user_id;
    });
    html += `<li>${user.name}: ${comment.content}</li>`;
  })
  commentBlock.innerHTML = html;
})


