const connection = require("./connection")
const { default: mongoose } = require("mongoose")
const {Restaurant, Users}= require("./seed")
const data = require("./data/index")


const seedDB = async () => {
    const { Restaurant, Users } = data
    await Restaurant.deleteMany({});
    await Restaurant.insertMany(Restaurants);
    console.log(Restaurant, Users)    
    await UserdeleteMany({});
    await Users.insertMany(Users);
}

seedDB().then(() => {
    mongoose.connection.close()
})