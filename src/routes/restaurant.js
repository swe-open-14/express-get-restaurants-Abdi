const express = require("express");
const Restaurant = require("../../models");
// const Restaurant = require("../models/")
const restaurantRouter = express.Router()


restaurantRouter.get("/", async (req,res,next) => {
    try{
        const restaurant = await Restaurant.findAll();
        res.json(restaurant);
    } catch(error) {
        next(error)
    }
  
})

restaurantRouter.get("/:id", async (req,res,next) => {
    try{
        const id = req.params.id
        const restaurant = await Restaurant.findByPk(id);
        res.json(restaurant);
    } catch(error) {
        next(error)
    }
  
})




module.exports = restaurantRouter;