const express = require ("express");
const bodyParser = require ("body-parser");
const mongoose = require("mongoose");

//connection with database established
require("../src/db/conn");


const app=express();

const port = process.env.PORT || 3000;

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(express.json());


const articleSchema = new mongoose.Schema({
    title:String,
    content:String

});


app.listen(port,()=>
{
    console.log("Server running successfully at port.")
});