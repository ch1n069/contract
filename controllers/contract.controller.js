const models = require("../models");

const Contract = models.Contract;

function createContract(req, res) {
  const uniId = 15;

  const contract = {
    universityId: uniId,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    status: req.body.status,
  };
  Contract.create(contract)
    .then((response) => {
      res
        .status(201)
        .json({ message: "Contract was created successfully", data: response });
    })
    .catch((err) => {
      res.status(500).json({ message: "Something wrong happened", error: err });
    });
}

module.exports = {
  createContract: createContract,
};
