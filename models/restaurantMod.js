const { Restaurant } = require("../database/seed");
const db = require("../database/connection");

exports.fetchAllRestaurants = () => {
  return Restaurant.find().then((restaurantList) => {
    return restaurantList;
  });
};

exports.fetchRestaurantsByLocation = (location) => {
  const area = location.slice(0, 3);
  const regExNo = /[0-9]/;
  if (area[0].match(regExNo)) {
    return Promise.reject({ status: 400, msg: "Invalid location type" });
  }
  return Restaurant.find({ postCode: { $regex: new RegExp(area, "i") } }).then(
    (restaurantList) => {
      if (restaurantList.length === 0) {
        return Promise.reject({ status: 404, msg: "Location does not exist" });
      }
      return restaurantList;
    }
  );
};
