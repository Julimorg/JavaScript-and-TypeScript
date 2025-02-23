let developer = {
    username : "Fong",
    age: 21,
    greet: function(){
        console.log(`Hello, my name is ${this.username}`);
    },
    moreGreet: () => {
        console.log(`Hello, my name is ${this.username}`);
    }
}
developer.greet();
developer.moreGreet();