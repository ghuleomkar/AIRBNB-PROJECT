const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");

const userController = require("../controllers/users.js");



//(any changes signup , login , logout  go to the controller user.js file );

router
.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup));


router
.route("/login")
.get(userController.renderLoginForm)
.post(
  saveRedirectUrl,
  passport.authenticate("local", {        //passport is  automatically user login;
    failureRedirect: "/login",
    failureFlash: true,
   }),
    userController.login
);






router.get("/logout",userController.logout);


module.exports = router;