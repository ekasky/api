const ROLES_LIST = require("../utils/roles_list");

const isAdmin = (req, res, next) => {

    if(req.session.userRole === ROLES_LIST.Admin) {
        next();
    }
    else {

        res.status(403).json({
            message: "You do not have permission to perform this action"
        });

    }

}

module.exports = isAdmin;