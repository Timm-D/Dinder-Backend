const { Users } = require("../database/seed");
exports.fetchAllUsers = () => {
  return Users.find().then((userList) => {
    return userList;
  });
};

exports.fetchIndividualUserByUsername = (username) => {
  const regEx = /^[0-9a-zA-Z]+$/;
  if (username.match(regEx)) {
    return Users.find({username: username}).then((individualUser) => {
      if (individualUser.length === 0) {
        return Promise.reject({status: 404, msg: "User not found"})
      }
      return individualUser;
    })
  } else {
    return Promise.reject({status: 400, msg: "Invalid username"})
  }
}

exports.updateUserByUsername = (username, preferences) => {
  return Users.updateOne(username, username.preferences.push(preferences))
}