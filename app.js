//Requiring Database
require("./models/db")
const express = require("express");
const app = express();
const path = require("path");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");


//to view public folder
app.use(express.static("public"));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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
app.get("/form-page", (req, res)=>{
    res.render("pages/formPage");
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log("Server running succesfully")
})