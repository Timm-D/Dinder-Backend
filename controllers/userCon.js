const LocalStrategy = require("passport-local");

const {
  fetchAllUsers,
  fetchIndividualUserByUsername,
  updateUserByUsername,
  deleteUserByUsername,
} = require("../models/userMod");
exports.getAllUsers = (req, res, next) => {
  fetchAllUsers()
    .then((userData) => {
      res.status(200).send(userData);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getIndividualUserByUsername = (req, res, next) => {
  const { username } = req.params;
  fetchIndividualUserByUsername(username)
    .then((individualUser) => {
      res.status(200).send(individualUser);
    })
    .catch((err) => {
      next(err);
    });
};

exports.patchUserByUsername = (req, res, next) => {
  const { username } = req.params;
  const { preferences, postcode, password } = req.body;
  updateUserByUsername(username, preferences, postcode, password)
    .then((updatedUser) => {
      res.status(200).send(updatedUser);
    })
    .catch((err) => {
      next(err);
    });
};

// exports.postUserInfo = (req, res, next) => {
//   res.json({username: req.username})
// }
exports.deleteUserByUsername = (req, res, next) => {
  const { username } = req.params;
  deleteUserByUsername(username)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      next(err);
    });
};
