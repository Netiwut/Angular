const express = require('express');
const app = express();
const router = express.Router();

const Users = require('../models/allmodels.js');

router.route('/add').post((req, res)=>{
const user = new Users(req.body);
user.save() 
    .then(user => {
        res.status(200).json({'User': 'User added successfully'});
        })
        .catch(err => {
        res.status(400).send("unable to save the User into database");
    });
});

router.route('/getAll').get((req, res)=>{
    Users.find((err, users)=>{
        if(err){
            console.log(err);            
        }else{
            res.json(users);
        }
    });
});

router.route('/update/:id').post((req, res)=>{
    Users.findById(req.params.id, (err, user)=>{
        if(!user)
            return next(new Error('Could not load Document'));
        else {
            user.username = req.body.username;
            user.password = req.body.password;

            user.save().then(user => {
                res.json('Successfully Updated');
            })
            .catch(err => {
                res.status(400).send("unable to update the database");
            });
        }
    });
});

router.route('/delete/:id').get((req,res)=>{
    Users.findByIdAndRemove({_id: req.params.id},(err, user)=>{
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});


module.exports = router;