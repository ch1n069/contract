"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class University extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      University.hasMany(models.Contract, {
        foreignKey: "universityId",
        as: "contracts", //university.contracts
      });
      // University.hasMany(models.CommissionRate, {
      //   foreignKey: "UniversityId",
      //   as: "commissionRates",
      // });
    }
  }
  University.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "University",
    }
  );
  return University;
};
