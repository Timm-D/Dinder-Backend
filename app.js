const express = require("express");
const db = require("./database/connection");
const app = express();
const {
  getAllRestaurants,
  getRestaurantsByLocation,
} = require("./controllers/restaurantCon");
app.use(express.json());

app.get("/api/restaurants", getAllRestaurants);

app.get("/api/restaurants/:location", getRestaurantsByLocation);

app.all("*", (req, res) => {
  res.status(404).send({ msg: "Not Found" });
});

app.use((err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send({ msg: err.msg });
  } else {
    next(err);
  }
});

module.exports = app;
