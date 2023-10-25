// register function
const bcrypt = require("bcrypt");
const models = require("./models");
const { response } = require("../app");
const User = models.User;
function register() {}

// login function

// pass word reset controller
function passWordReset(req, res) {
  // we grab the email that the user entered into
  // we cross check if there is a user who exists
  // if the user exists we then send them a refresh token to the email address
  // the refresh token should be a one time link to the
  // after the users updated the tokens table with the new token and
  // if there was a token that existed in the tokens table for the same email address
  // delete the old token and generate new token
  const email = req.body.email;
  User.findOne({ where: { email: email } })
    .then((response) => {
      if (response === null) {
        return res
          .status(409)
          .json({ message: "Invalid credentials provided" });
      } else {
      }
    })
    .catch();
}
