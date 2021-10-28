const mongoose = require('mongoose');
const AddEventSchema = require('../Shcemas/addEventSchemas');

const AddEventModel = mongoose.model('event', AddEventSchema);




module.exports = AddEventModel;