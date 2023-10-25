"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CommissionRate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CommissionRate.belongsTo(models.Contract, {
        foreignKey: "contractId",
      });
      CommissionRate.belongsTo(models.Course, { foreignKey: "courseId" });
    }
  }
  CommissionRate.init(
    {
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        references: { model: "Courses", key: "id" },
      },
      contractId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        references: { model: "Contracts", key: "id" },
      },
      commissionPercentage: { type: DataTypes.FLOAT, allowNull: false },
    },
    {
      sequelize,
      modelName: "CommissionRate",
    }
  );
  return CommissionRate;
};
