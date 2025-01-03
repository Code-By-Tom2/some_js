// singleton

//object literals\
// Object.create()
const mySym= Symbol("key1")
const JsUser = {
    name:"shovan",
    "full name": "shovan Chaudhuri",
   [mySym]: "mykey1",
    Age: 20,
    email:"shovanchaudhuri@gmail.com",
    isLoggedIn: false,
    lastLoggeinDays: ["Monday", "Tuesday", "Wednesday"],

}

console.log(JsUser.email)
console.log(JsUser.mysym)
// console.log(JsUser."full name")//not possible
console.log(JsUser["full name"])

JsUser.email= "shovanhdhsgd@gmail.com"
// Object.freeze(JsUser)
JsUser.email= "svdhjsjshk@gmail.com"//not change possiable
console.log(JsUser.email)

JsUser.greeting =function(){
    console.log("hello")
}
JsUser.greetingTow =function(){
    console.log(`hello ,$(this.name)`)
}
console.log(JsUser.greeting());


