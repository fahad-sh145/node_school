var a = 10;
var b = 20;
var c = a + b;
console.log(c);


for (let i = 1; i < 10; i++) {
    console.log(i);
}

const fah = ["virat", "rohit", "david", true, "siraj", 1];
fah.push("root");
// fah.pop("brook");
console.log(fah);
console.log(typeof true);
console.log(fah[4]);



const obj = {
    name: "bashir",
    age: 10,
    work: "backend develoer",
    salary: 80,
}

console.log(obj);
console.log(obj.name);



// function add(a ,b){
//     return a+b;
// }

//both the way is correct


// var add = (a ,b)=>{
//     return a+b;
// }


// this is arrow function

var add = (a, b) => a + b;


var result = add(2, 9);
console.log(result);

(function () {
    console.log("fahad");
})();

// 3 ways to define an callback function
//1.


// function subback(){
//     console.log("hello fahad");
// }

// var sub= function(a,b,subback){
//     var result = a - b; //main function 
//     console.log(result);
//     subback();


// }

// sub(10,7,subback);

//2.

// var sub = function(a,b,subback){
//     var result = a-b;
//     console.log(result)
//     subback();
// }

// sub(20,4,function fah(){
//     console.log("hello fahad");
// })

3//.



// var sub = function(a,b,subback){
//     var result = a-b;
//     console.log(result)
//     subback();
// }

// sub(10,4, ()=>console.log("hello fahad"));


// var fs = require('fs');
// var os = require('os');


// var user = os.userInfo();
// console.log(user);
// console.log(user.username);


// fs.appendFile('fahad.txt','hi'+ user.username + '!\n' ,()=> console.log("callback"));

// var user = os.uptime()
// console.log(user);


// fs.appendFile('bashir.txt','hi '+ user + '!\n ' ,()=> console.log("callback"));


// var pra = require('./fah.js');
// console.log("hii");


// var age = pra.age;
// var result = pra.multnum(age+2 ,5);
// console.log( "result is:" ,result);

// console.log(age);

// var _ = require('lodash');

// var data =["person","person", 1,3,4,"age","age","num", 4, 3, 1];
// var filter = _.uniq(data);
// console.log(filter);


const express = require('express');

const app = express();

const db = require('./db');

// const student = require('./models/student');

// const sir = require('./models/sir');

const bodyparser = require('body-parser');
app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.send(" hello");
})


app.post('/stokes', (req, res) => {
    res.send("i am a postman");
})

app.get('/root', (req, res) => {
    res.send("hii");
})

app.get('/buttler', (req, res) => {
    res.send("how are you");
})



// app.post('/student', async (req, res) => {

//     try {


//         const data = req.body;

//         const newstudent = new student(data);

//         const response = await newstudent.save();

//         console.log('data saved');
//         res.status(200).json(response);
//     }

//     catch (err) {

//         console.log(err);
//         res.status(500).json({ error: 'invalid server error' });

//     }
// })


// app.get('/student', async (req, res) => {

//     try {

//         const response = await student.find();

//         console.log('data saved');
//         res.status(200).json(response);
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'invalid server error' });

//     }

// })



// app.get('/student/:bashir', async (req, res) => {

//     try {

//         const bashir = req.params.bashir;
//         if (bashir == "A" || bashir == "B" || bashir == "C") {
//             const response = await student.find({ div: bashir });

//             console.log('data saved');
//             res.status(200).json(response);

//         }
//         else{
//             res.status(404).json({error:'invalid div error'});
//         }
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'invalid server error' });
//     }
// })



// app.post('/sir', async (req, res) => {

//     try {


//         const data = req.body;

//         const newsir = new sir(data);

//         const response = await newsir.save();

//         console.log('data saved');
//         res.status(200).json(response);
//     }

//     catch (err) {

//         console.log(err);
//         res.status(500).json({ error: 'invalid server error' });

//     }
// })


// app.get('/sir', async (req, res) => {

//     try {

//         const response = await sir.find();

//         console.log('data saved');
//         res.status(200).json(response);
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'invalid server error' });

//     }

// })



// app.get('/sir/:king', async (req, res) => {

//     try {

//         const king = req.params.king;
//         if (king == "english" || king == "maths" || king == "science") {
//             const response = await sir.find({ subject: king });

//             console.log('data saved');
//             res.status(200).json(response);

//         }
//         else{
//             res.status(404).json({error:'invalid div error'});
//         }
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'invalid server error' });
//     }
// })

const studentroutes = require('./routes/studentroutes');
const sirroutes = require('./routes/sirroutes');

app.use('/student' ,studentroutes);
app.use('/sir' ,sirroutes);

app.listen(3000, () => {
    console.log(" i am still alive");
})
