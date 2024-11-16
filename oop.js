const user = {
    Username: "Ananya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got User details from database");
        console.log(`Username:${this.Username}`);
        console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username,loginCount,isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }
    return this
}
const userOne = new User("Anu", 12, true);
const userTwo = new User("Stree", 13,true)
console.log(userOne);
console.log(userTwo);


















