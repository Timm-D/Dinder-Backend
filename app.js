const express = require("express");
const db = require("./database/connection");
const app = express();
const cors = require("cors");
const passport = require("passport");

const {
  getAllRestaurants,
  getRestaurantsByLocation,
  getIndividualRestaurantByLocation,
  getUserCoordinates,
} = require("./controllers/restaurantCon");
const { getAllPreferences } = require("./controllers/preferenceCon");
const {
  getAllUsers,
  getIndividualUserByUsername,
  patchUserByUsername,
  deleteUserByUsername,

  postUserInfo,
} = require("./controllers/userCon");
app.use(cors());
app.use(express.json());

app.get("/api/restaurants", getAllRestaurants);
app.get("/api/users", getAllUsers);
// app.get("/api.postcodes.io/postcodes/:postcode", getUserCoordinates);
app.get("/api/restaurants/:location", getRestaurantsByLocation);
app.get("/api/restaurants/:location/:name", getIndividualRestaurantByLocation);
app.get("/api/users/:username", getIndividualUserByUsername);
app.get("/api/preferences", getAllPreferences);

app.post("/api/users", postUserInfo);

app.patch("/api/users/:username", patchUserByUsername);

app.delete("/api/users/:username", deleteUserByUsername);

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
  console.log(err);
  res.status(500).send({ msg: "Server Error" });
});

module.exports = app;
