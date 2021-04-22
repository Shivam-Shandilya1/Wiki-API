const express = require ("express");
const bodyParser = require ("body-parser");
const mongoose = require("mongoose");

//connection with database established
require("../src/db/conn");
//establish Database Model and Schema
const MensRanking = require("../src/models/mens");
const router = require("../src/routers/men");
const app=express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(express.json());
const port = process.env.PORT||3000;

app.use(router);

app.listen(port,()=>
{
    console.log(`Server running successfully at port no. ${port}`);
});