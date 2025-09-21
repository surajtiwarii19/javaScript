const tinderUser = new Object()
// const tinderUser= {}

tinderUser.id = "1245af"
tinderUser.name = "Sam"
tinderUser.isLoggedin = false

console.log(tinderUser); //{ id: '1245af', name: 'Sam', isLoggedin: false }

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "suraj",
            lastname: "tiwari",
        }
    } 
}
    console.log(regularUser.fullname); //{ userfullname: { firstname: 'suraj', lastname: 'tiwari' } }
console.log(regularUser.fullname?.userfullname.firstname); //suraj

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3  = Object.assign({}, obj1, obj2); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3 = {...obj1, ...obj2}
console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const users = [
    {
        id: 141,
        name: "Sam",
        isLoggedin: false,
    },
    {
        id: 141,
        name: "Sam",
        isLoggedin: false,
    },
    {
        id: 141,
        name: "Sam",
        isLoggedin: false,
    }
]

users[1].email
console.log(tinderUser); //{ id: '1245af', name: 'Sam', isLoggedin: false }

console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedin' ]
console.log(Object.values(tinderUser)); //[ '1245af', 'Sam', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '1245af' ], [ 'name', 'Sam' ], [ 'isLoggedin', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedin')); //true



