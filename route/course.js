const express = require("express");

const courseController = require("../controllers/course.controller");
// const { default: ModelManager } = require("sequelize/types/model-manager");

const router = express.Router();

router.post("/course", courseController.createCourse);

module.exports = router;
