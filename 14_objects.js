// const tinderuser= new Object()
const tinderuser ={}

tinderuser.id="shovan123"
tinderuser.name="shovan"
tinderuser.isLoogedIn=false

// console.log(tinderuser);

const regularUser={
    fullname:{
        userfullname:{
            firstname:"shovan",
            lastname:"chaudhuri"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


const obj1={1: "a", 2: "b"}
const obj2={3: "b", 4: "a"}
const obj4={5: "b", 6: "a"}

// const obj3=(obj1,obj2)
// const obj3= Object.assign({}, obj1,obj2,obj4)
const obj3= {...obj1,...obj2}
console.log(obj3);


const users=[
    {
        id:1,
        name:"shovan"
    
    },
    {
        id:2,
        name:"sam"
    },
    {
        id:3,
        name:"sunny"
    },
    {
        id:4,
        name:"sumit"
    }
]

user[1].name
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));


console.log(tinderuser.hasOwnProperty("isLoggedin"));

const course={
    title:"JS",
    price:1000,
    courseInstroctor:  "shovan",
}

//course..courseInstroctor

const {courseInstroctor} =course

// console.log(courseInstroctor);
console.log(instructor);

// {
//    "name:"shovan",
//     "course":"js",
//     "prise":"free"
// }

[
    {},
    {},
    {}
]
