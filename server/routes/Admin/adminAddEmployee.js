const express = require("express");
const router = express.Router();

const adminAddEmployee = require("../../controller/Admin/addEmployeeController");

// add Employee

router.route("/add-employee").post(adminAddEmployee.addEmployee)

// edit Employee
router.route("/edit-employee").get(adminAddEmployee.editEmployee)

// delete Employee 
router.route("/delete-employee").get(adminAddEmployee.deleteEmployee)

module.exports = router;
