"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contract.belongsTo(models.University, {
        foreignKey: "universityId",
        as: "university",
      });
      Contract.hasMany(models.CommissionRate, {
        foreignKey: "contractId",
        as: "commissionRates",
      });
    }
  }
  Contract.init(
    {
      universityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        references: { model: "Universities", key: "id" },
      },
      startDate: DataTypes.STRING,
      endDate: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Contract",
    }
  );
  return Contract;
};
