// FUNCTIONS

function Myname(){
console.log("S");
console.log("U");
console.log("R");
console.log("A");
console.log("J");
console.log("K");
console.log("T");
}

// Myname();


// Adding two numbers
function addTwonumbers(num1, num2){

    let result = num1 + num2
        // return result
    return num1 +num2



    // console.log(num1 + num2);

}

addTwonumbers(4,7); //11
addTwonumbers(); // NaN
addTwonumbers(4,"7"); //47
addTwonumbers(4, null); //4

const result = addTwonumbers(4,4)
console.log("result: ",result) // result: undefined


function loginUsermessage(username){
    if (username == undefined){  // if (!username) => please enter a username:
        console.log("Please enter a username: ");;   
        return 
    }
    return `${username} just logged in`
    
}

console.log(loginUsermessage()) //undefined just logged in






