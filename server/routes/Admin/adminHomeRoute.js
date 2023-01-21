const express = require("express");
const router = express.Router();

const adminHomeController = require("../../controller/Admin/adminHomeController");

// get all employees
router.route("/get-employees").post(adminHomeController.getAllEmployees);

// search 
router.route("/search").get(adminHomeController.searchEmployee);


module.exports = router;
