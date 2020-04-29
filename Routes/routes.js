var express =  require('express');
const router = express.Router();
const Contact= require('../models/contacts');//retrieving schema

//GET DATA
router.get('/contacts',function(req,res,next){
     
    Contact.find(function(err,contacts){//find is for retrieving
        res.json(contacts);//changing in jason format
    })

});

//add contact
router.post('/contact',function(req,res,next){
    
    let newContact=new Contact({

        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phone:req.body.phone
    });
    

    newContact.save(function(err,contact){
        if(err){
            res.json({msg:'FAILED'})
        }
        else{

            res.json({msg:'added successfully'})

        }
    })//for saving it

});

//deleting contact
router.delete('/contact/:id',function(req,res,next){
    Contact.remove({_id:req.params.id},function(err,result){
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    })

});

module.exports = router;