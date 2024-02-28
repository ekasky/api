const { Sequelize } = require("sequelize");
const { db_name, db_user, db_pass, db_host, db_dialect } = require("./config");

const sequelize = new Sequelize(db_name, db_user, db_pass, {
    host: db_host,
    dialect: db_dialect
});

module.exports = sequelize;