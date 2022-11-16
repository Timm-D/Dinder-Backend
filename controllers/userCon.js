const { fetchAllUsers } = require("../models/userMod");
exports.getAllUsers = (req, res, next) => {
  fetchAllUsers()
    .then((userData) => {
      res.status(200).send(userData);
    })
    .catch((err) => {
      next(err);
    });
};
