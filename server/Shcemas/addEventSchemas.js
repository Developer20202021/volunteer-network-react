const mongoose = require('mongoose');


const AddEventSchema = new mongoose.Schema({
    imageUrl:{
        type:String
    },
    date:{
        type:Date
    },
    description:{
        type:String
    },
    title:{
        type:String
    }




})

module.exports = AddEventSchema;