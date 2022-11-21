const LocalStrategy = require("passport-local");
const User = require("./seed");

module.exports = (passport) => {
    passport.use(
      "local-signup",
      new LocalStrategy(
        {
          usernameField: "userName",
          passwordField: "password",
        },
        async (username, password, done) => {
          try {
            // check if user exists
            const userExists = await User.findOne({ "userName": username });
            if (userExists) {
              return done(null, false)
            }
            // Create a new user with the user data provided
            const user = await User.create({ username, password });
            return done(null, user);
          } catch (error) {
            done(error);
          }
        }
      )
    );
    passport.use(
        "local-login",
        new LocalStrategy(
          {
            usernameField: "userName",
            passwordField: "password",
          },
          async (userName, password, done) => {
            try {
              const user = await User.findOne({ username: userName });
              if (!user) return done(null, false); //if user doesn't exist, make new user
              const isMatch = await user.matchPassword(password);
              if (!isMatch)
                return done(null, false);
              // if passwords match return/login user
              return done(null, user);
            } catch (error) {
              console.log(error)
              return done(error, false);
            }
          }
        )
      );
     };