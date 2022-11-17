const {
  fetchAllRestaurants,
  fetchRestaurantsByLocation,
  fetchIndividualRestaurantByLocation,
  fetchUserCoordinates,
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

// exports.getUserCoordinates = (req, res, next) => {
//   const {postcode} = req.params;
//   fetchUserCoordinates(postcode).then(() => {

//   })
// }

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

exports.getIndividualRestaurantByLocation = (req, res, next) => {
  const {location, name} = req.params;
  fetchIndividualRestaurantByLocation(location, name).then((restaurant) => {
    res.status(200).send(restaurant);
  }).catch((err) => {
    next(err);
  })
};


