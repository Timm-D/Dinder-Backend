const { Users } = require("../database/seed");
exports.fetchAllUsers = () => {
  return Users.find().then((userList) => {
    return userList;
  });
};
