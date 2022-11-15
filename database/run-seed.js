const connection = require("./connection");
const { default: mongoose } = require("mongoose");
const { Restaurant, Users } = require("./seed");
const data = require("./data/index");

const { restaurantData, usersData } = data;

const seedDataBase = async (restaurantData, usersData) => {
  await Restaurant.insertMany(restaurantData);
  await Users.insertMany(usersData);
};

const clearDataBase = async () => {
  await Restaurant.deleteMany({});
  await Users.deleteMany({});
};

const closeDataBase = async () => {
  await mongoose.connection.close();
}

// seedDB(restaurantData, usersData).then(() => {
  
// });

module.exports = {seedDataBase, clearDataBase, closeDataBase};
