require("dotenv").config();

module.exports = {

    server_port: process.env.PORT,

    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USER,
    db_pass: process.env.DB_PASS,
    db_host: process.env.DB_HOST,
    db_dialect: "mysql",
    db_session_secret: process.env.DB_SESSION_SECRET,
    db_session_expire_time: 60000 * 60                                                               // One hour

};