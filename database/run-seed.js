const connection = require("./connection");
const { default: mongoose } = require("mongoose");
const { Restaurant, Users } = require("./seed");
const data = require("./data/index");

const seedDB = async () => {
  const { restaurantData, usersData } = data;
  await Restaurant.deleteMany({});
  await Restaurant.insertMany(restaurantData);
  await Users.deleteMany({});
  await Users.insertMany(usersData);
};

seedDB().then(() => {
  mongoose.connection.close();
});
