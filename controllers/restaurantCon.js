const {
  fetchAllRestaurants,
  fetchRestaurantsByLocation,
} = require("../models/restaurantMod");

exports.getAllRestaurants = (req, res, next) => {
  fetchAllRestaurants()
    .then((restaurantData) => {
      res.status(200).send(restaurantData);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getRestaurantsByLocation = (req, res, next) => {
  const { location } = req.params;

  fetchRestaurantsByLocation(location)
    .then((restaurants) => {
      res.status(200).send(restaurants);
    })
    .catch((err) => {
      next(err);
    });
};
