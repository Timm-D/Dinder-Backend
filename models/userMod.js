const { Users } = require("../database/seed");
exports.fetchAllUsers = () => {
  return Users.find().then((userList) => {
    return userList;
  });
};

exports.fetchIndividualUserByUsername = (username) => {
  return Users.find({username: username}).then((individualUser) => {
    if (individualUser.length === 0) {
      return Promise.reject({status: 404, msg: "User not found"})
    }
    return individualUser;
  })
}