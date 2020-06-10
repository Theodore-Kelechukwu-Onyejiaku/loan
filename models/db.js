const mongoose = require("mongoose");

//MongoDB Connection
var mongoDB = "mongodb://localhost:27017/loan";
mongoose.connect(mongoDB, {useNewUrlParser: true});
var db = mongoose.connections;
db.concat("error", console.error.bind(console, "MongoDB connection error."));
