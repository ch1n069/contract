const registerController = require("../controllers/register.controller");
const loginController = require("../controllers/login.controller");
const express = require("express");

const router = express.Router();

router.post("/user/signUp", registerController.registerUser);
router.post("/user/signin", loginController.login);

module.exports = router;
