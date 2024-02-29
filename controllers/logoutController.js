

const logoutController = (req, res) => {

    if(req.session) {

        req.session.destroy(err => {

            if(err) {
                return res.status(500).json({
                    message: "Logout Failed"
                });
            }

            res.clearCookie("auth");

        });

    }
    else {

        res.status(200).json({
            message: "You are not logged in"
        });

    }

}

module.exports = logoutController;