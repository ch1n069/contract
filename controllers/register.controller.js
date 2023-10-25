const bcrypt = require("bcrypt");
const models = require("../models");
const User = models.User;
const validator = require("fastest-validator");
const generateToken = require("../services/generateToken");
//
function register(req, res) {
  const roleId = 1;
  const refreshToken = process.env.REFRESH_TOKEN_SECRET;
  const emailToken = generateToken();

  User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      // if the user exists
      if (user) {
        return res
          .status(409)
          .json({ message: "User already exists with that email" });
      } else {
        // if user does not exist then create the user
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            const user = {
              firstName: req.body.firstName,
              secondName: req.body.secondName,
              email: req.body.email,
              password: hash,
              refreshToken: refreshToken,
              roleId: roleId,
              verificationToken: emailToken,
            };
            User.create(user)
              .then((response) => {
                res
                  .status(201)
                  .json({ message: "User created Successfully", response });
              })
              .catch((error) => {
                res
                  .status(500)
                  .json({ message: "Something Went wrong", error: error });
              });
          });
        });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
}

function verifyEmail(req, res) {
  try {
  } catch (error) {}
}

module.exports = {
  registerUser: register,
  verifyEmail: verifyEmail,
};
