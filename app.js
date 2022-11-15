const express = require("express");
const db = require("./database/connection");
const app = express();
const getAllRestaurants = require("./controllers/restaurantCon");
app.use(express.json());

app.get("/api/restaurants", getAllRestaurants);










app.all("*", (req, res) => {
  res.status(404).send({ msg: "Not Found" });
});

module.exports = app;
