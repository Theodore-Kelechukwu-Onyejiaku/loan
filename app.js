//Requiring Database
require("./models/db")

//Requiring User Model
User = require("./models/User");


const express = require("express");
const app = express();
const path = require("path");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

//configuring dotenv
require("dotenv").config();
//Importing the body-parser middle ware
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.use(cors());


//Requiring user controller
const userController = require("./controllers/user")



//to view public folder
app.use(express.static("public"));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/", userController);

//Index Page
app.get("/", (req, res)=>{
    res.render("pages/index")
})

//benefits page
app.get("/benefits", (req, res)=>{
    res.render("pages/benefits")
})

//Personal Loans
app.get("/personal_loans", (req, res)=>{
    res.render("pages/personal-loans")
})

//FAQS
app.get("/faqs", (req, res)=>{
    res.render("pages/faqs")
})

//How it works
app.get("/how_it_works", (req, res)=>{
    res.render("pages/how-it-works")
})


//Form Page
app.post("/form-page", (req, res)=>{
    res.render("pages/formPage", {data : req.body});
})

//TESTING ALL UNPROTECTED ROUTES
app.get("/admin", (req, res)=>{
    User.find((err, doc)=>{
        if(!err){
            console.log(doc)
            res.render("admin/admin_view", {doc : doc});
        }else{
            res.render("pages/error")
        }
    })
    
})

//to get all users 
app.get("/all_users", (req, res)=>{
    User.find((err, doc)=>{
        if(!err){
            console.log(doc)
            res.render("admin/all_users", {doc : doc});
        }else{
            res.render("pages/error")
        }
    })
})

//to delete a single user
app.get("/:id/delete", (req, res)=>{
    User.findByIdAndRemove(req.params.id, (err, doc)=>{
        if(!err){
            console.log("Removed Document")
            res.redirect("/all_users")
        }else{
            console.log("Document not removed")
            res.render("pages/error")
        }
    })
})

//to get a single user to edit
app.get("/:id/edit", (req, res)=>{
    User.findById(req.params.id, (err, doc)=>{
        if(!err){
            console.log("Document Found")
            res.render("admin/update", {doc: doc})
        }else{
            console.log("Document not found")
            res.render("pages/error")
        }
    })
})


//Success Page
app.post("/apply", (req, res)=>{
    console.log(req.body);
    var user = new User();
    user.loan_amount = req.body.loan_amount
    user.purpose = req.body.purpose,
    user.estimated_credit_score = req.body.estimated_credit_score
    user.name= req.body.name
    user.last_name = req.body.last_name
    user.phone = req.body.phone
    user.email= req.body.email
    user.date_of_birth= req.body.date_of_birth
    user.street_address = req.body.street_address
    user.unit_number = req.body.unit_number
    user.zip_code = req.body.zip_code
    user.country = req.body.country
    user.hosing_status= req.body.hosing_status
    user.housing_payment= req.body.housing_payment
    user.employment_status = req.body.employment_status
    user.yearly_income = req.body.yearly_income
    user.status = req.body.status
    user.save((err, doc)=>{
        if(!err){
            console.log("Inserted to database")
            res.render("pages/application_success");
        }else{
            console.log("Error: "+err)
            res.render("pages/error")
        }
    })    
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log("Server running succesfully")
})