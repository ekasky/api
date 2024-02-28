const User = require("../models/UserModel");

const loginController = async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await User.login(email, password);

        req.session.userId = user.id;
        req.session.userRole = user.role;

        res.status(200).json({
            message: "Login Sucessful"
        });

    }
    catch(error) {

        res.status(400).json({
            message: error.message
        });

    }

}

module.exports = loginController;