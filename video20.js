function calculatecartPrice(...num1){
    return num1
}

console.log(calculatecartPrice(200, 400, 500))

const user = {
    username: "abc",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    //username is sam and price is 399
}

handleObject(user)
handleObject({
    username: "sam",
    price: 399,
})

const mynewArray = [200, 400, 100, 600]
function returnSecondvalue(getArray){
    return getArray[1]
}

console.log(returnSecondvalue(mynewArray)); //400
console.log(returnSecondvalue([200, 400, 500, 1000])); //400
