// ARRAYS
const arr = [0,1,2,3,4,5,true,"suraj"];
// const arr2 = new array(1,2,3,4);
console.log(arr); // [ 0, 1, 2, 3, 4, 5, true, 'suraj' ]
console.log(arr[0]); // 0


// ARRAY Methods

arr.push("tiwari")
arr.pop("tiwari")
arr.unshift(9) // [ 9, 0, 1, 2, 3, 4, 5, true, 'suraj' ]
arr.shift(); //

console.log(arr); // [ 0, 1, 2, 3, 4, 5, true, 'suraj' ]
console.log(arr.includes(9)); // false
console.log(arr.indexOf(5)); // 5

const newarr = arr.join();

console.log(arr)
console.log(typeof newarr); // string

console.log("A", arr);

const newArr = arr.slice(1,4);
console.log(newArr); // [ 1, 2, 3 ]

// const newArr = arr.splice(1,4);
// console.log(,newArr); // [ 1, 2, 3, 4]








