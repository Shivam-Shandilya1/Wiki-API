const express = require ("express");
const bodyParser = require ("body-parser");
const mongoose = require("mongoose");

const app=express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/wikiDB",{useNewUrlParser:true,useUnifiedTopology: true});

const articleSchema = new mongoose.Schema({
    title:String,
    content:String

});

const Article = mongoose.model("Article",articleSchema);

app.get("/articles",function(req,res)
{
    Article.find(function(err,foundArticles)
    {
            res.send(foundArticles);
        
        
        
    });
});

app.listen(3000,function()
{
    console.log("Server started at port 3000.");
});