const mongoose = require("mongoose");
const ENV = process.env.NODE_ENV || "dev";
const config =
  ENV === "production"
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false,
        },
      }
    : {};
require("dotenv").config({
  path: `${__dirname}/../.env.${ENV}`,
});

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
