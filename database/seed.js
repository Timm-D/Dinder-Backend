const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

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
  location: {
    type: {
      type: String,
      enum: ['Point'],
      },
    coordinates: {
      type: [Number],
      required: true
      }
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


usersSchema.pre('save', async function(next) {
  try {
    // check method of registration
    const user = this;
    if (!user.isModified('password')) next();
    // generate salt
    const salt = await bcrypt.genSalt(10);
    // hash the password
    const hashedPassword = await bcrypt.hash(this.password, salt);
    // replace plain text password with hashed password
    this.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});



usersSchema.methods.matchPassword = async function (password) {
 try {
   return await bcrypt.compare(password, this.password);
 } catch (error) {
   throw new Error(error);
 }
};


const Restaurant = mongoose.model("Restaurant", restaurantSchema);


const Users = mongoose.model("Users", usersSchema);
const Preferences = mongoose.model("Preferences", preferenceSchema);
const seedDataBase = async (restaurantData, usersData, preferencesData) => {
  await Restaurant.deleteMany({});
  await Restaurant.insertMany(restaurantData);
  // await Restaurant.createIndex( { location: "2dsphere" } )
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
