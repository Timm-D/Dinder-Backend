const { fetchAllUsers, fetchIndividualUserByUsername, updateUserByUsername } = require("../models/userMod");
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
  const {username} = req.params;
  fetchIndividualUserByUsername(username).then((individualUser) => {
    res.status(200).send(individualUser);
  }).catch((err) => {
    next(err);
  })
}

exports.patchUserByUsername = (req, res, next) => {
  const {username} = req.params;
  const {preferences} = req.body;
  // console.log(preferences)
  updateUserByUsername(username, preferences).then((updatedUser) => {
    res.status(200).send(updatedUser)
  }).catch((err) => {
    next(err)
  })
}