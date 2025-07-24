const express = require('express');

const router = express.Router();

const student = require('./../models/student');



router.post('/', async (req, res) => {

    try {


        const data = req.body;

        const newstudent = new student(data);

        const response = await newstudent.save();

        console.log('data saved');
        res.status(200).json(response);
    }

    catch (err) {

        console.log(err);
        res.status(500).json({ error: 'invalid server error' });

    }
})


router.get('/', async (req, res) => {

    try {

        const response = await student.find();

        console.log('data saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'invalid server error' });

    }

})



router.get('/:bashir', async (req, res) => {

    try {

        const bashir = req.params.bashir;
        if (bashir == "A" || bashir == "B" || bashir == "C") {
            const response = await student.find({ div: bashir });

            console.log('data saved');
            res.status(200).json(response);

        }
        else{
            res.status(404).json({error:'invalid div error'});
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'invalid server error' });
    }
})



router.put('/:id', async (req, res) => {

    try {

        const studentId = req.params.id;

        const updatedstudentData = req.body;

        const response = await student.findByIdAndUpdate(studentId, updatedstudentData, {
            new: true,
            runValidators: true,

        })

        if (!response) {
            return res.status(404).json({ error: 'invalid server error' });
        }
        console.log('data updated');

        res.status(200).json(response);
    }
    catch(err) {

        console.log(err);
        res.status(500).json({ error: 'invalid server error' });
    }
}

)




router.delete('/:id' , async (req ,res)=>{

    try{

        const studentId = req.params.id;
        
        const response = await student.findByIdAndDelete(studentId);
        
        if(!response){
            return res.status(404).json({error : 'student not found'});
        }
        
        console.log('data delete');
        
            res.status(200).json({message :'student delete successfully'});
            
            
            
        }
    
        catch(err){
                
                console.log(err);
                res.status(500).json({error: 'invalid  server error'})
            }
        })
    

module.exports = router;