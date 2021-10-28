const mongoose = require('mongoose');

const registerVolunteerScheema = new mongoose.Schema({

    volunteerName:{
        type:String,
        required:true
    } ,
    volunteerEmail:{
        type:String,
        required:true
    },
    registrationDate:{
        type: Date,
        default: Date.now,
        required:true
        
    },
    registrationDescription:{
        type:String,
       
    },
    registrationorganise:{
        type:String
        
    }





})

module.exports = registerVolunteerScheema;