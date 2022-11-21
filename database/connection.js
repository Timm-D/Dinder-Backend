const mongoose = require("mongoose");
const ENV = process.env.NODE_ENV || "dev";
console.log(ENV , "this is our env")

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

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL not set");
}

const mongoString = process.env.DATABASE_URL;

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
