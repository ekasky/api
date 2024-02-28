const ROLES_LIST = require("../utils/roles_list");

const changeRollController = (req, res) => {

    const { email, role } = req.body;

    // Ensure email and role are supplied
    if(!email || !role) {
        return res.status(400).json({
            message: "Email and role required"
        });
    }

    // Check if the role is valid
    if(!Object.keys(ROLES_LIST).includes(role)) {
        return res.status(400).json({
            message: "Invalid role"
        });
    }

    res.json({
        message: "TODO: Change user role"
    });

}

module.exports = changeRollController;