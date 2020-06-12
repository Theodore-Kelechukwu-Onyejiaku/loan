const mongoose = require("mongoose");

//configuring dotenv
require("dotenv").config();

//MongoDB Connection
var mongoDB = process.env.DATABASE;
mongoose.connect(mongoDB, {useNewUrlParser: true});
var db = mongoose.connections;
db.concat("error", console.error.bind(console, "MongoDB connection error."));
