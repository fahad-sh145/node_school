
const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURL = ' mongodb://127.0.0.1:27017/school'
// const mongoURL = ' mongodb+srv://fahad:king12345@cluster0.t1jwt77.mongodb.net/'
const mongoURL = process.env.MONGODB_URL;
// const mongoURL = process.env.MONGODB_URL_LOCAL;



mongoose.connect('mongodb+srv://fahad:king12345@cluster0.t1jwt77.mongodb.net/' ,{
 
    useNewUrlParser:true,
    useUnifiedTopology: true
})

// mongoose.connect('mongodb://127.0.0.1:27017/school' ,{
 
//     useNewUrlParser:true,
//     useUnifiedTopology: true
// })


const db = mongoose.connection;

db.on('connected',()=>{
    console.log('connected  to the mongodb server');
})

db.on('error',(err)=>{
    console.log('mongodb connection error',err);
})

db.on('disconnected',()=>{
    console.log('disconnected  to the mongodb server');
})

module.exports =db;