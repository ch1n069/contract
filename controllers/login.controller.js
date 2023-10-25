const models = require("../models");
const User = models.User;
const bcrypt = require("bcrypt");
const { configDotenv } = require("dotenv");
const jwt = require("jsonwebtoken");
configDotenv;

function login(req, res) {
  User.findOne({ where: { email: req.body.email } })
    .then((response) => {
      if (response === null) {
        return res.status(401).json({ message: "Invalid credentials" });
      } else {
        // compare the user passwords with the one in the db
        bcrypt.compare(
          req.body.password,
          response.password,
          function (err, result) {
            if (err) {
              return res.status(401).json({ message: "Authentication failed" });
            }
            if (result) {
              const token = jwt.sign(
                {
                  email: response.email,
                  userId: response.id,
                  role: response.roleId,
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "1hr" }
              );
              res
                .status(200)
                .json({ message: "Authentication successful", token: token });
            } else {
              // Moved the 'Authentication failed' response here
              return res.status(401).json({ message: "Authentication failed" });
            }
          }
        );
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Something wrong happened", error: error });
    });
}

module.exports = { login: login };
