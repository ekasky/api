

const logoutController = (req, res) => {

    if(req.session.userId) {

        req.session.destroy(err => {

            if(err) {
                return res.status(500).json({
                    message: "Logout Failed"
                });
            }

            res.clearCookie("auth");

            res.status(200).json({
                message: "Logged Out Successfully"
            });

        });

    }
    else {

        res.status(200).json({
            message: "You are not logged in"
        });

    }

}

module.exports = logoutController;