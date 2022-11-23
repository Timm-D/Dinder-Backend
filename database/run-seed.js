const connection = require("./connection");
const { default: mongoose } = require("mongoose");
const { Restaurant, Users, Preferences, seedDataBase } = require("./seed");
const data = require("./dev_data/index");

const { restaurantData, usersData, preferencesData } = data;
connection();
const runSeed = () => {
  return seedDataBase(restaurantData, usersData, preferencesData).then(() => {
    mongoose.connection.close();
  });
};

runSeed();
