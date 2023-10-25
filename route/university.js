const express = require("express");

const universityController = require("../controllers/university.controller");

//
const router = express.Router();

router.post("/university", universityController.save);

module.exports = router;
