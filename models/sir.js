
const mongoose = require('mongoose');

const sirSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true
    },

    age:{
        type:Number,
        required: true
    },

    subject:{
        type:String,
        enum:["english" ,"maths" ,"science"],
        required: true
    },

    salary:{
        type:Number,
        required: true
    },

    email:{
        type:String,
        unique:true,
        required: true
    },
})

const sir = mongoose.model('sir' ,sirSchema);
module.exports = sir