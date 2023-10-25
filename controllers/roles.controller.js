const models = require("../models");
const Role = models.Role;
const validator = require("fastest-validator");
function createRole(req, res) {
  const role = {
    name: req.body.role,
    description: req.body.description,
  };

  Role.create(role)
    .then((response) => {
      res.status(201).json({ message: "Role created successfully", response });
    })
    .catch((error) => {
      res.status(500).json({ message: "Error creating role", error: error });
    });
}

module.exports = {
  createRole: createRole,
};
