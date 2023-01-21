const express = require("express");
const router = express.Router();
const adminLoginAndSignupController = require("../../controller/Admin/loginController");


// admin Signup
router.post("/signup", adminLoginAndSignupController.adminSignup);

//admin Login 
router.post("/login",adminLoginAndSignupController.adminLogin)


module.exports = router;