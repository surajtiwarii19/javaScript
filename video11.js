const name = "su-raj"
const repoCount= 41

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo is ${repoCount}`) // Backticks
// Hello my name is Su-raj and my repo is 41

let gamename= new String("gta")
console.log(gamename[0], gamename[1]); //g t
console.log(gamename.__proto__); // {}
console.log(gamename.length); //3
console.log(gamename.toUpperCase()); //GTA
console.log(gamename.charAt("2")); //a
console.log(gamename.indexOf("g")); //0

const newGameName = gamename.substring(0,2);
console.log(newGameName); //gt

let string = gamename.slice(0,3);
console.log(string); // gta

let string2 = gamename.slice(-3,1);
console.log(string2); //g

let string3 = "       suraj       ";
console.log(string3);//      suraj
console.log(string3.trim()); //suraj

const url = "https://suraj.com//surajkumar18"
console.log(url.replace("18", "79247")); //"https://suraj.com//surajkumar79247"
console.log(url.includes("kumar")); //true

console.log(gamename.split(' ')); // [ 'gta' ]



/*
String

anchor
: 
ƒ anchor()
at
: 
ƒ at()
big
: 
ƒ big()
blink
: 
ƒ blink()
bold
: 
ƒ bold()
charAt
: 
ƒ charAt()
charCodeAt
: 
ƒ charCodeAt()
codePointAt
: 
ƒ codePointAt()
concat
: 
ƒ concat()
constructor
: 
ƒ String()
endsWith
: 
ƒ endsWith()
fixed
: 
ƒ fixed()
fontcolor
: 
ƒ fontcolor()
fontsize
: 
ƒ fontsize()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
isWellFormed
: 
ƒ isWellFormed()
italics
: 
ƒ italics()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
link
: 
ƒ link()
localeCompare
: 
ƒ localeCompare()
match
: 
ƒ match()
matchAll
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
padEnd
: 
ƒ padEnd()
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()
Symbol(Symbol.iterator)
: 
ƒ [Symbol.iterator]()
*/