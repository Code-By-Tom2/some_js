const userEmail="shovan@gmail.com"

if(userEmail){
    console.log("got user email");
}else{
console.log("Don't have user email")
}

// falsy value

// false, 0, -0, bigint on, "", null, undifine, nan

//truthy values
//"0", 'false', "", [], function(){}
if (userEmail.length===0){
    console.log("array is empty")
}

const emptyobj={}

if(Object.krys(emptyobj).length===0){
    console.log("object is empty");
}

const loggedInFromGoogle = false
const loggedInFromEMail = true
if(userLoggedIn && debitcard && 2==3){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}

// Nullish coalescing operator(??): null undefined
let vall;
val1=5?? 10
val1=null??10
val1=undefined?? 15
val1=null ??10 ?? 20

console.log(vall);
// Terniary operator
const iceTeaprice =100
iceTeaPrice<=80? console.log("less than 80"): console.log("more than 80")




