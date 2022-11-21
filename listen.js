const app = require("./app");
const PORT = process.env.PORT || 3000
const connectDB = require("./database/connection")


connectDB().then(() => {
  app.listen(PORT, () => {
      console.log("listening for requests");
  })
})
// app.listen(PORT, () => {
//   console.log(`Listening on ${PORT}...`);
// });
