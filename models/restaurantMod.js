const { Restaurant } = require("../database/seed");
const db = require("../database/connection");

exports.fetchAllRestaurants = () => {
  return Restaurant.find().then((restaurantList) => {
    return restaurantList;
  });
};
