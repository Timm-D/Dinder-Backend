const { fetchAllRestaurants } = require("../models/restaurantMod");

exports.getAllRestaurants = (req, res, next) => {
  fetchAllRestaurants()
    .then((restaurantData) => {
      res.status(200).send(restaurantData);
    })
    .catch((err) => {
      next(err);
    });
};
