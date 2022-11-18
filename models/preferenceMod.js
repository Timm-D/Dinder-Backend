const {Preferences} = require("../database/seed")
exports.fetchAllPreferences = () => {
    return Preferences.find().then((preferenceList) => {
        return preferenceList;
      });
}