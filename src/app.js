const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

app.set("json spaces", 2);

//TODO: Create your GET Request Route Below: 
app.get("/restaurants", async (req,res) =>{
    try{
const data = await Restaurant.findAll();
res.json(data)
    } catch (error) {
        console.error(error);
      }
})

app.get("/restaurants/:id", async (req,res) => {
    const id = req.params.id;
    const restaurant = await Restaurant.findByPk(id);
res.json(restaurant);

})

// app.use()



module.exports = app;