const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const { db_host, db_user, db_pass, db_name, db_session_secret,  db_session_expire_time } = require("../utils/config");

const sessionStore = new MySQLStore({
    host: db_host,
    user: db_user,
    password: db_pass,
    database: db_name,
    clearExpired: true,
    checkExpirationInterval:  db_session_expire_time,
    expiration: db_session_expire_time
});

const express_session = session({

    key: "auth",
    secret: db_session_secret,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge:  db_session_expire_time,
        httpOnly: true,
        sameSite: "strict"
    }

});

module.exports = express_session;