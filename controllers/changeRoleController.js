const ROLES_LIST = require("../utils/roles_list");
const User = require("../models/UserModel");

const changeRollController = async (req, res) => {

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

    // See if user exists in database
    const user = await User.findOne({where: {email}});

    if(!user) {
        return res.status(400).json({
            message: "Invalid user"
        });
    }

    // Update users role
    user.role = ROLES_LIST[role];
    await user.save();

    res.json({
        message: "User role updated successfully",
        email,
        role
    });

}

module.exports = changeRollController;