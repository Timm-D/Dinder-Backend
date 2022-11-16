const express = require("express");
const db = require("./database/connection");
const app = express();
const { getAllRestaurants } = require("./controllers/restaurantCon");
const { getAllUsers } = require("./controllers/userCon");
app.use(express.json());

app.get("/api/restaurants", getAllRestaurants);
app.get("/api/users", getAllUsers);

app.all("*", (req, res) => {
  res.status(404).send({ msg: "Not Found" });
});

app.use((err, req, res, next) => {
  res.status(500).send({ msg: "Server Error" });
});
module.exports = app;
