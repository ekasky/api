const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const { db_host, db_user, db_pass, db_name, db_session_secret } = require("../utils/config");

const sessionStore = new MySQLStore({
    host: db_host,
    user: db_user,
    password: db_pass,
    database: db_name
});

const express_session = session({

    key: "auth",
    secret: db_session_secret,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 1000}

});

module.exports = express_session;