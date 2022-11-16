const express = require("express");
const db = require("./database/connection");
const app = express();
const {
  getAllRestaurants,
  getRestaurantsByLocation,
  getIndividualRestaurantByLocation,
} = require("./controllers/restaurantCon");

const { getAllUsers, getIndividualUserByUsername } = require("./controllers/userCon");
app.use(express.json());

app.get("/api/restaurants", getAllRestaurants);
app.get("/api/users", getAllUsers);
app.get("/api/restaurants/:location", getRestaurantsByLocation);
app.get("/api/restaurants/:location/:name", getIndividualRestaurantByLocation);
app.get("/api/users/:username", getIndividualUserByUsername);

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

app.use((err, req, res, next) => {
  res.status(500).send({ msg: "Server Error" });
});

module.exports = app;
