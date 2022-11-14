const seed = require("./seed")
const connection = require("./connection")
const { default: mongoose } = require("mongoose")
const Restaurant = require("./seed")


const seedDB = async () => {
    await Restaurant.deleteMany({});
    await Product.insertMany()
}

seedDB().then(() => {
    mongoose.connection.close()
})