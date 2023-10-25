const models = require("../models");
const CommissionRate = models.CommissionRate;
function createCommissionRate(req, res) {
  //   const course = 1;
  const contract = 3;
  const commissionRateData = {
    courseId: 2,
    contractId: contract,
    commissionPercentage: req.body.commissionPercentage,
  };

  CommissionRate.create(commissionRateData)
    .then((response) => {
      res.status(201).json({
        message: "CommissionRate recorded Successfully",
        data: response,
      });
    })
    .catch((err) => {
      res.status(500).json({ message: "Something wrong happened", error: err });
    });
}

module.exports = {
  createCommissionRate: createCommissionRate,
};
