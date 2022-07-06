const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    user_firstName:{
        type: String
    },
    user_middleName:{
        type: String
    },
    user_lastName:{
        type: String
    },
    user_yearOfBirth:{
        type: Date
    },
    user_gender:{
        type: String
    },
    user_city:{
        type: String
    },
    user_state:{
        type: String
    },
    user_country:{
        type: String
    },
    user_allergy:{
        type: String
    },
    user_hasAllergy:{
        type: Boolean
    },
    user_phoneNumber:{
        type: Number
    },
    user_arrivingFlight:{
        type: String
    },
    user_arrivingAirport:{
        type: String
    },
    user_departingFlight:{
        type: String
    },
    user_departingAirport: {
        type: String
    },
    user_hostedby:{
        type: String
    },
    user_goingToAsthan: {
        type: String
    },
    user_email:{
        type: String
    },
    user_comments: {
        type: String
    },
    user_emergencyContact: {
        type: String
    },
},
{
    timestamps: true   //adds created_at and updated_at timestamps for data points
});

module.exports = mongoose.model('User', User);    
