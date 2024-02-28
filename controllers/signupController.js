const User = require("../models/UserModel");

const signupController = async (req, res) => {

    const { first_name, last_name, username, email, password } = req.body;

    try {

        const user = await User.signup(first_name, last_name, username, email, password);

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

module.exports = signupController;