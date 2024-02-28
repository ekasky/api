const sequelize = require("../utils/sequelize");
const { Sequelize, DataTypes } = require("sequelize");


const User = sequelize.define("User", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    username: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  }, {
    // Additional model options
    timestamps: true,
    underscored: true,
});

module.exports = User;