function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user ={
    username : "hitesh",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.usernam} and price is ${anyobject.price}`);

}

// handleObject(user)
handleObject({
    username:"sam",
    price: 399
})

constmyNewArray =[200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue);
console.log (returnSecondValue([200, 400, 500, 1000]));


