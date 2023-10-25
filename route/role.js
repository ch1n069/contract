const express = require("express");
const roleController = require("../controllers/roles.controller");

const router = express.Router();

router.post("/add/role", roleController.createRole);

module.exports = router;
