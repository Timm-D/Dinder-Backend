const connection = require("./connection");
const { default: mongoose } = require("mongoose");
const { Restaurant, Users, seedDataBase } = require("./seed");
const data = require("./dev_data/index");

const { restaurantData, usersData } = data;

const runSeed = () => {
  return seedDataBase(restaurantData, usersData).then(() => {
    mongoose.connection.close();
  });
};

runSeed();
