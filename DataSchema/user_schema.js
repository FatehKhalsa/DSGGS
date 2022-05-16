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
    user_dateOfBirth:{
        type: Date
    },
    user_gender:{
        type: String
    },
    user_city:{
        type: String
    },
    user_country:{
        type: String
    },
    user_medicalConditions: {
        type: String
    },
    user_emergencyContact:[{
        firstName: String,
        lastName: String,
        phone: Number,
        email: String
    }],
    user_phoneNumber: {
        type: Number
    },
    user_isWhatsAppNumber: {
        type: Boolean
    },
    user_email:{
        type: String
    },
    user_comments: {
        type: String
    }

});

module.exports = mongoose.model('User', User);    
