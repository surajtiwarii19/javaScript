const score = 400
console.log(score)// 400


const balance = new Number(100)
console.log(balance) // [Number: 100]

console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); //100.00

const otherNumber = 23.6367
console.log(otherNumber.toPrecision(3)); //23.6

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN")); //10,00,000

// ++++++++++++++++++++++++++++++++++   Maths   +++++++++++++++++++++++++++++++++++++

console.log(Math) //Object [Math] {}
console.log(Math.abs(-4)); /* abs = absolute value. Negative value become postive 
 but postive value does not become negative value
*/
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5 It roundoff the number to 5 only even if there will be 4.2 or 4.9 
console.log(Math.floor(4.2)); // 4 it roundoff to four only ever if there is 4.2 or 4.9
console.log(Math.min(4,3,6,7,5)); //3
console.log(Math.max(4,45,3,7,9,0)); //45

console.log(Math.random()); 
console.log(Math.floor(Math.random()*10) + 1); //10 is used to shift the number and 1 is for 0.

const min = 10
const max = 20

[[[[console.log(Math.floor(Math.random() * (max-min+1) + min))]]]]

/*
Number And math

*/