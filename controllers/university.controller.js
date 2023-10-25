const models = require("../models");
const University = models.University;
function uploadUniversity(res, req) {}

function save(req, res) {
  // the data to be posted to the universities table
  const university = {
    name: req.body.name,
    location: req.body.location,
  };
  University.create(university)
    .then((response) => {
      res
        .status(201)
        .json({ message: "University added Successfully", data: response });
    })
    .catch((err) => {
      res.status(500).json({ message: "Something went wrong", error: err });
    });
}

module.exports = {
  uploadUniversity: uploadUniversity,
  save: save,
};
