var z = 300
let x = 200
// {} // scope

if (true) {
    let x = 10
    const y = 20
    var z = 30
    console.log("Inner: ",x); //Inner: 10
    
}

console.log(x); //200
// console.log(y); //Error
console.log(z); //30  Thats why we dont use var to declare variable



