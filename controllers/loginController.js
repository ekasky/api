const User = require("../models/UserModel");

const loginController = async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await User.login(email, password);

        res.status(200).json({
            user
        });

    }
    catch(error) {

        res.status(400).json({
            message: error.message
        });

    }

}

module.exports = loginController;