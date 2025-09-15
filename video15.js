const marvelHeros = ["thor", "Ironman", "spiderMan"];
const dcHeros = ["superman", "Flash", "batman"]

marvelHeros.push(dcHeros)

console.log(marvelHeros); // [ 'thor', 'Ironman', 'spiderMan', [ 'superman', 'Flash', 'batman' ] ]

marvelHeros.concat(dcHeros)
console.log(marvelHeros); // [ 'thor', 'Ironman', 'spiderMan', [ 'superman', 'Flash', 'batman' ] ]


const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros); /*[
  'thor',
  'Ironman',
  'spiderMan',
  [ 'superman', 'Flash', 'batman' ],
  'superman',
  'Flash',
  'batman'
]
*/

// const allNewHeros = [...marvelHeros, ...dcHeros]
// console.log(allNewheros);

 const anotherArray = [1,2,3, [4,5,6], 7, [6,7, [4,5]]]

 const realanotherarray = anotherArray.flat(Infinity)
 console.log(realanotherarray);
 /*
 [
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
 */

console.log(Array.isArray("Suraj")); // false
console.log(Array.from("Suraj")); // [ 'S', 'u', 'r', 'a', 'j' ]
console.log(Array.from({name: "Suraj"})); // []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
