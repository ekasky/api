

const changeRollController = (req, res) => {

    const { email, role } = req.body;

    // Ensure email and role are supplied
    if(!email || !role) {
        return res.status(400).json({
            message: "Email and role required"
        });
    }

    res.json({
        message: "TODO: Change user role"
    });

}

module.exports = changeRollController;