"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.hasMany(models.CommissionRate, {
        foreignKey: "courseId",
        as: "commissionRates", /// course
      });
    }
  }
  Course.init(
    {
      courseName: DataTypes.STRING,
      courseType: DataTypes.STRING,
      commissionNote: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Course",
    }
  );
  return Course;
};
