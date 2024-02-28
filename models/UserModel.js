const sequelize = require("../utils/sequelize");
const { Sequelize, DataTypes } = require("sequelize");
const validator = require("validator");
const bcrypt = require("bcrypt");


const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    // Additional model options
    timestamps: true,
    underscored: true,
});

// Sign Up User Method
User.signup = async (first_name, last_name, username, email, password) => {

  // Ensure all the required fields are present
  if( !first_name || !last_name || !username || !email || !password ) {
    throw new Error("All feilds required");
  }

  // Ensure email is a valid email
  if(!validator.isEmail(email)) {
    throw new Error("Invalid Email");
  }

  // Ensure password is strong
  if(!validator.isStrongPassword(password)) {
    throw new Error("Password not strong enough");
  }

  // Ensure email and/or username is not already in use
  const existingUser = await User.findOne({ where: { [Sequelize.Op.or]: [{username}, {email}] } });

  if(existingUser) {
    throw new Error("Username or email already Exists");
  }

  // Hash the users password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // Create new user
  const user = await User.create({
    first_name,
    last_name,
    username,
    email,
    password: hash
  });

  return user;

}

module.exports = User;