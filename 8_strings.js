const name= "shovan"
const repoCount = 20

console.log(name+repoCount+" value");

console.log(`hello I am ${name} and I have ${repoCount} repos`);

const gamename= "pubg"

// console.log(gamename[0]);
// console.log(gamename[1]);

// console.log(gamename.__proto__);

// console.log(gamename.length);
// console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf("u"));

const newString = gamename.substring(1,3) 
console.log(newString);

const anotherString = gamename.slice(-1,3)
console.log(anotherString);

const newStringOne= " shovan "
console.log(newStringOne);
console.log(newStringOne.trim());

const url= "https://www.google.com"

console.log(url.replace("https", "http"));

console.log(url.includes("shovan"));

console.log(gamename.split(""));
