const user ={
    username:"shovan",
    price: 999,
welcomeMessage : function(){
    console.log(`${this.username}, welcome to website`);
console.log(this);
}
}

// user.welcomeMessage()
// user.username= "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     console.log(this.username);
// }
// chai()

// const chai = function (){
//     let username = "shovan"
//     console.log(this.username);
// }

const chai = () =>{
    let username= "shovan"
    console.log(this);

}

// chai()
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>(num1 + num1)
// const addTwo = (num1, num2) =>(num1 + num1)
const addTwo = (num1, num2) =>{username: "shovan"}


console.log(addTwo(3, 4))

const myArray = [2, 5, 3, 7, 8]
myArray.forEach()
