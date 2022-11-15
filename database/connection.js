const mongoose = require("mongoose");
require('dotenv').config();
const mongoString = process.env.DATABASE_URL


async function connect() {
  try {
    await mongoose.connect(mongoString);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
connect();

module.exports = connect;
