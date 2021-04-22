const express = require("express");
const router =new express.Router();


const MensRanking = require("../models/mens");
//inserting a document
router.post("/mens",async(req,res)=>
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
})

.get("/mens",async(req,res)=>
{
    try{
        const getMens = await MensRanking.find({}).set({"ranking":1});
        res.status(200).send(getMens);
    }catch(err)
    {
        res.status(400).send(err);
    }
})
.patch("/mens/:id",async(req,res)=>
{
    try{
      const _id = req.params.id;
      const getMen = await MensRanking.findByIdAndUpdate(_id,req.body,{new:true});
      res.send(getMen);
    }catch(err)
    {
        res.status(500).send(err);
    }
})
.delete("/mens/:id",async(req,res)=>
{
    try{
      const deleteMen = await MensRanking.findByIdAndDelete(req.params.id);
      res.send(deleteMen);
    }catch(err)
    {
        res.status(500).send(err);
    }
});

module.exports = router;