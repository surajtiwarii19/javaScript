// SingleTon // Literals ki trah declare krte hai to literals nhi bnega 
// Constructor se bnega to SingleTon hoga
// Object.create => It is maded by constructor method

const mySymbol = Symbol("asdf");

// object Literals
const JSuser ={
    name: "Suraj",
    age: 18,
    [mySymbol]: "asdf",
    location: "rudrapur",
    email: "suraj@yahoo.com",
    isloggedin: false,
    lastloginDays: ["Monday","Friday"]

}

console.log(JSuser.email); //suraj@yahoo.com
console.log(JSuser["email"]); //suraj@yahoo.com
console.log(typeof mySymbol) //Symbol
console.log(JSuser[mySymbol]) // asdf //if you dont use bracket it refer to as string

JSuser.email = "surajkumar@gpt.com"
// Object.freeze(JSuser) // user cannot change data
JSuser.email = "suraj.microsoft.com"
console.log(JSuser.email) // "surajkumar@gpt.com"

JSuser.greeting = function(){
    console.log("Helo"); 
}

JSuser.greetingtwo = function(){
    console.log(`Helo, ${this.name}`); 
}

console.log(JSuser.greeting()); //Helo
console.log(JSuser.greetingtwo()); //Helo, Suraj

/*
maximum time we use JSuser. but at somepoint we want to use squared brackets

*/
