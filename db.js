
const mongoose = require('mongoose');

// const mongoURL = ' mongodb://127.0.0.1:27017/school'


mongoose.connect('mongodb://127.0.0.1:27017/school' ,{
 
    useNewUrlParser:true,
    useUnifiedTopology: true
})


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