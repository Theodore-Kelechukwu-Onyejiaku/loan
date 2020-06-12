const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    loan_amount : {type:String},
    purpose: {type: String},
    estimated_credit_score : {type: String},
    name: {type: String},
    last_name : {type: String},
    phone: {type: String},
    email: {type: String},
    date_of_birth : {type: String},
    street_address : {type: String},
    unit_number: {type: String},
    zip_code: {type: String},
    country: {type: String},
    housing_status: {type: String},
    housing_payment: {type: String},
    employment_status: {type: String},
    yearly_income: {type: String},
    status : {type: String, enum: ["pending", "decline", "approved"]}
});


module.exports = mongoose.model("User", UserSchema);