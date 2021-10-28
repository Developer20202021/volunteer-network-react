const mongoose = require('mongoose');
const express = require('express');
const registerVolunteerModel = require('../Models/RegisterVolunteerModel');
const voluinteerRouter = express.Router();




voluinteerRouter.get('/register-list',async(req, res)=>{

    const allRegisterInfo = await registerVolunteerModel.find({})
    res.status(200).json({allRegisterInfo})
    // if (allRegisterInfo) {
    //     console.log(allRegisterInfo);
    // }






})
voluinteerRouter.delete('/register-delete/:id',async (req,res)=>{
    const {id} = req.params;
    const deleteItem =await registerVolunteerModel.deleteOne({_id:id})
    console.log(deleteItem);






    console.log(req.params);
})







module.exports = voluinteerRouter;