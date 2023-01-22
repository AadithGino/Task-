const express = require("express");
const router = express.Router();
const adminAddEmployee = require("../../controller/Admin/addEmployeeController");
const { protect } = require("../../JWT/auth");

// add Employee
router.route("/add-employee").post(protect,adminAddEmployee.addEmployee);

// edit Employee
router.route("/edit-employee").post(protect,adminAddEmployee.editEmployee);

// delete Employee
router.route("/delete-employee").get(protect,adminAddEmployee.deleteEmployee);

// get single employee details
router.route("/single-employee").get(protect,adminAddEmployee.getSingleEmployee);


module.exports = router;
