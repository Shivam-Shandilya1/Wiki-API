const express = require ("express");
const bodyParser = require ("body-parser");
const mongoose = require("mongoose");

//connection with database established
require("../src/db/conn");
//establish Database Model and Schema
const MensRanking = require("./models/mens");

const app=express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(express.json());
const port = process.env.PORT||3000;

//inserting a document
app.post("/mens",async(req,res)=>
{
    try
    {
        const Men1 = new MensRanking(req.body);
        console.log(req.body);
        const insertMen= await Men1.save();
        res.status(201).send(insertMen);
    }catch(err)
    {
       res.status(404).send(err);
    }
});

app.get("/mens",async(req,res)=>
{
    try{
        const getMens = await MensRanking.find({}).set({"ranking":1});
        res.status(200).send(getMens);
    }catch(err)
    {
        res.status(400).send(err);
    }
})

app.listen(port,()=>
{
    console.log(`Server running successfully at port no. ${port}`);
});