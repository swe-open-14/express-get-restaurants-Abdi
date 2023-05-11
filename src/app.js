const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const restaurantRouter = require("./routes/restaurant")
const db = require("../db/connection");

app.set("json spaces", 2);
app.use(express.json());
app.use(express.urlencoded());
app.use("/restaurants", restaurantRouter)

//TODO: Create your GET Request Route Below: 
// app.get("/restaurants", async (req,res) =>{
//     try{
// const data = await Restaurant.findAll();
// res.json(data)
//     } catch (error) {
//         console.error(error);
//       }
// })

// app.get("/restaurants/:id", async (req,res) => {
//     const id = req.params.id;
//     const restaurant = await Restaurant.findByPk(id);
// res.json(restaurant);

// })

// app.post("/restaurants/", async (req,res) => {
//     const restaurant = await Restaurant.create(req.body);
// res.json(restaurant);
// })

// app.put("/restaurants/:id", async (req,res) => {
//     const UpdatedRestaurant = await Restaurant.update(req.body, {where: {id: req.params.id}});
// res.json(UpdatedRestaurant);
// })

// app.delete("/restaurants/:id", async (req,res) => {
//     const deletedRest = await Restaurant.destroy({where: {id: req.params.id}});
// res.json(deletedRest);
// })


// app.use()



module.exports = app;