//stack(premitive), Heap(non-premitive)
let myname = "shovan"
let yourname = myname

console.log(yourname);
yourname = "Tom"


console.log(myname);
console.log(yourname);

let user = {
    email: "shovanchaudhuri@gmail.com",
    upi: "shovan@okhdfc"
}

let user2 = user
user2.email = "fjhjh@gmail.com"
console .log(user.email);
console.log(user2.email);
