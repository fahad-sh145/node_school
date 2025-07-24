const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    rollno: {
        type: Number,
        required: true
    },

    div: {
        type: String,
        enum: ["A", "B", "C"],
        required: true
    },

    std: {
        type: String,
        required: true
    },

    email:{
         type: String,
         unique:true,
        required: true
        
    }


})


const student = mongoose.model('student',studentSchema);
module.exports = student;