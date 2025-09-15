// DATE

let myDate = new Date()
console.log(myDate.toString()); // Mon Sep 15 2025 23:56:54 GMT+0530 (India Standard Time)
console.log(myDate.toISOString())// 2025-09-15T18:30:52.363Z
console.log(myDate.toJSON()) // 2025-09-15T18:30:52.363Z
console.log(myDate.toLocaleDateString()) // 16/9/2025
console.log(myDate.toLocaleString()) // 16/9/2025, 12:00:52 am
console.log(typeof myDate); // object

let CreatedDate = new Date(2025, 3,18,6,18)
// let CreatedDate = new Date("2025-04-18")
console.log(CreatedDate); // 2025-05-17T18:30:00.000Z
console.log(CreatedDate.toDateString()); // Sun May 18 2025
console.log(CreatedDate.toLocaleString()); // 18/4/2025, 6:18:00 am

// TIME

let TimeStamp = Date.now()
console.log(TimeStamp); // 1757962488570
console.log(CreatedDate.getTime()); // 1744937280000
console.log(Date.now()); // 1757962488571
console.log(Math.floor(Date.now()/1000)); // 1757962624

let newDate = new Date()
console.log(newDate); //2025-09-15T19:00:29.155Z
console.log(newDate.getDay()); // 2
console.log(newDate.getMonth()+1); // 9

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: "TimeStamp",
})
