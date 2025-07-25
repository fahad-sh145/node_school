const express = require('express');

const router = express.Router();

// const student = require('./../models/student');

const sir = require('./../models/sir');




router.post('/', async (req, res) => {

    try {


        const data = req.body;

        const newsir = new sir(data);

        const response = await newsir.save();

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

        const response = await sir.find();

        console.log('data saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'invalid server error' });

    }

})




router.get('/:shaikh', async (req, res) => {

    try {

        const shaikh = req.params.shaikh;
        if (shaikh == "english" || shaikh == "maths" || shaikh == "science") {
            const response = await sir.find({ subject: shaikh });

            console.log('data saved');
            res.status(200).json(response);

        }
        else {
            res.status(404).json({ error: 'invalid div error' });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'invalid server error' });
    }
})



router.put('/:id', async (req, res) => {

    try {

        const sirid = req.params.id;

        const updatedsirData = req.body;

        const response = await sir.findByIdAndUpdate(sirid, updatedsirData, {
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

        const sirId = req.params.id;
        
        const response = await sir.findByIdAndDelete(sirId);
        
        if(!response){
            return res.status(404).json({error : 'sir not found'});
        }
        
        console.log('data delete');
        
            res.status(200).json({message :'sir delete successfully'});
            
            
            
        }
    
        catch(err){
                
                console.log(err);
                res.status(500).json({error: 'invalid  server error'})
            }
        })
    


module.exports = router;