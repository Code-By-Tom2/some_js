//primitive

//7 types : string, number, boolean, null, undefined, symbol, bigint

const score= 100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;



const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = BigInt(1234567890)


//refrence type (nonprimitive)

// array, object, function

const heros = ["superman", "batman", "wonderwoman"]
let user = {
    name: "shovan",
    age: 20
}

const myfunction = function(){
    console.log("hello word")
}

colsole.log(typeof scoreValue);