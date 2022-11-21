const   {fetchAllPreferences}=require("../models/preferenceMod")
exports.getAllPreferences = (req,res,next)=> {
    fetchAllPreferences()
    .then((preferencesData) => {
        res.status(200).send(preferencesData)  
     })
     .catch((err) => {
        next(err)
     })
} 