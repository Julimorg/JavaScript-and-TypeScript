function Developer(username){
    this.username = username;
    this.greet = function(){
        console.log(`Hello, my name is ${this.username}!`);
    }
}
const dev = new Developer("Fong");
dev.greet();