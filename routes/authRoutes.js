const passport = require("passport");
//has nothing to do with passport.js file
//require original passport library
module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      //string 'google' is the internal identifier in GoogleStrategy
      scope: ["profile", "email"]
      //acutal Google servers what access we want to have inside of this user's profile
      //'profile' 'email' is in the list of specific pieces
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"), //middleware
    (req, res) => {
      res.redirect("/surveys");
    }
  );
  //turn the code into actual profile

  app.get("/api/logout", (req, res) => {
    req.logout();
    //passport kill the cookie
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
