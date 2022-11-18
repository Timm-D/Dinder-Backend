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
  type: {
    type: String,
    required: true,
  },
});

const preferenceSchema = new mongoose.Schema({
  preference:{
    type: String,
    required: true
  }
})

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
    required: true,
  },
  preferences:  {
    type: [{type: String}],
    required: false,
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
const Users = mongoose.model("Users", usersSchema);
const Preferences = mongoose.model("Preferences", preferenceSchema);
const seedDataBase = async (restaurantData, usersData, preferencesData) => {
  await Restaurant.deleteMany({});
  await Restaurant.insertMany(restaurantData);
  await Users.deleteMany({});
  await Users.insertMany(usersData);
  await Preferences.deleteMany({});
  await Preferences.insertMany(preferencesData);
};

const clearDataBase = async () => {
  await Restaurant.deleteMany({});
  await Users.deleteMany({});
};
const closeDataBase = async () => {
  await mongoose.connection.close();
};

module.exports = {
  Restaurant,
  Users,
  Preferences,
  seedDataBase,
  clearDataBase,
  closeDataBase,
};
