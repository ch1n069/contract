const express = require("express");
const projectController = require("../controllers/projection.controller");

const router = express.Router();

router.get("/all1", projectController.calculateProjections);

module.exports = router;
