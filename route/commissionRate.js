const express = require("express");

const router = express.Router();

const commissionRateController = require("../controllers/commissionRate.controller");

router.post("/commissionRate", commissionRateController.createCommissionRate);

module.exports = router;
