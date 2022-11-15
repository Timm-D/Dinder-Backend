const mongoose = require("mongoose");

const uri = "mongodb+srv://Tim:Dinder123@dinder.3ntspee.mongodb.net/Dinder";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
connect();

module.exports = connect;
