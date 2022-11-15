const express = require("express");
const db = require("./database/connection");
const app = express();
const getAllRestaurants = require("./controllers/restaurantCon")

app.get("/api/restaurants", getAllRestaurants)










module.exports = app