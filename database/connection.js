const mongoose = require("mongoose");
const ENV = process.env.NODE_ENV || "dev";
console.log(ENV , "this is our env")

// const config =
//   ENV === "production"
//     ? {
//         connectionString: process.env.DATABASE_URL,
//         ssl: {
//           rejectUnauthorized: false,
//         },
//       }
//     : {};
require("dotenv").config({
  path: `${__dirname}/../.env.${ENV}`,
});

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL not set");
}
//
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

connectDB();
//
// const mongoString = process.env.DATABASE_URL;
// console.log(mongoString)

// async function connect() {
//   try {
//     await mongoose.connect(mongoString);
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.log(error);
//   }
// }
// connect();

module.exports = connectDB;
