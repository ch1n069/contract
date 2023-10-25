const express = require("express");

const contractController = require("../controllers/contract.controller");

const router = express.Router();

router.post("/contract", contractController.createContract);

module.exports = router;
