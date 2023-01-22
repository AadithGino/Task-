const express = require("express");
const router = express.Router();

const adminAddEmployee = require("../../controller/Admin/addEmployeeController");

// add Employee
router.route("/add-employee").post(adminAddEmployee.addEmployee);

// edit Employee
router.route("/edit-employee").post(adminAddEmployee.editEmployee);

// delete Employee
router.route("/delete-employee").get(adminAddEmployee.deleteEmployee);

// get single employee details
router.route("/single-employee").get(adminAddEmployee.getSingleEmployee);


module.exports = router;
