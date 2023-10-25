"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, { foreignKey: "roleId", as: "role" });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      secondName: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
      refreshToken: DataTypes.STRING,
      roleId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Role", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
