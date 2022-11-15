const { fetchAllRestaurants } = require("../models/restaurantMod");

const getAllRestaurants = (req, res, next) => {
  fetchAllRestaurants().then((restaurantData) => {
    res.status(200).send(restaurantData);
  });
};

module.exports = getAllRestaurants;
