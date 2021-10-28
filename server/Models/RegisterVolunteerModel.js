const mongoose = require("mongoose");
const registerVolunteerScheema = require("../Shcemas/RegisterVolunteerScheema");


const registerVolunteerModel = mongoose.model('registerVolunteer',registerVolunteerScheema);

module.exports = registerVolunteerModel