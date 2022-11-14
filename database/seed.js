const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  addressLine1: {
    type: String,
    required: true,
  },
  postCode: {
    type: String,
    required: true,
  },
  ratingValue: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  geoLong: {
    type: Number,
    required: true,
  },
  geoLat: {
    type: Number,
    required: true,
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema)

module.exports = Restaurant