const express = require("express");
const associationController = require("../controllers/associationTest.controller");
const checkauthMiddleware = require("../middleware/check-auth");
const checkAdminMiddleware = require("../middleware/check-admin");
const router = express.Router();

router.get("/all", associationController.associationTest);

module.exports = router;
