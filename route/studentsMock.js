const express = require("express");
const router = express.Router();

// call to api
const mockAPiController = require("../controllers/mockStudentServer.controller");

router.get("/mockStudentServer", mockAPiController.mockCall);

module.exports = router;
