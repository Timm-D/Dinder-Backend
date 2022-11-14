const connection = require("./connection")
const { default: mongoose } = require("mongoose")
const Restaurant = require("./seed")
const data = require("./data/index")
const Restaurants = require("./data/restaurant")


const seedDB = async () => {
    await Restaurant.deleteMany({});
    await Restaurant.insertMany(Restaurants)
}

seedDB().then(() => {
    mongoose.connection.close()
})