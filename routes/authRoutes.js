const express = require("express");
const router = express.Router();
const signupController = require("../controllers/signupController");
const loginController = require("../controllers/loginController");
const changeRoleController = require("../controllers/changeRoleController");

const isAdmin = require("../middleware/is_admin");

router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/change-role", isAdmin, changeRoleController);

module.exports = router;