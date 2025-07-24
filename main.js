var prompt = require('prompt-sync')();
const age = prompt("enter your number :");
if (age < 18) {
    console.log("yes");
}
else {
    console.log("no");
}


let a=3;
let b=3;
let ans =a+b;
console.log(ans);

const name='fahad';
console.log(name);
console.log(typeof name);


const players =["virat","rohit","surya","hardik",3];
players.push("pant");
console.log(players);

console.log(players[2]);

for(let i=0;i<=5;i++){
    console.log(i);
}


const v ={
    name:"fahad",
    age:19,
    value:true,
    print:["bashir","virat","rohit"],
}

console.log(v.value);
