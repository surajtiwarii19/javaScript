let ytname = "surajtiwari"

let anothername = ytname
anothername = "hiteshchoudhary"

console.log(ytname); // surajtiwari
console.log(anothername) // hiteshchoudhary


let Userone = {
    email: "asdf@gmail.com",
    upi: "asdf@idfc"
}

let usertwo = Userone

usertwo.email = "google@xyz.com"

console.log(Userone.email) // google@xyz.com
console.log(usertwo.email) // google@xyz.com




/*
Stack Memory (primitive)  copy
Heap memory (Non primitive)  reference


*/