const express = require("express");
const router = express.Router();
const { protect } = require("../../JWT/auth");
const adminHomeController = require("../../controller/Admin/adminHomeController");

// get all employees
router.route("/get-employees").post(protect,adminHomeController.getAllEmployees);

// search 
router.route("/search").get(protect,adminHomeController.searchEmployee);


module.exports = router;
