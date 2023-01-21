const employeeSchema = require("../../model/employeeModel");

// fetching all employees

exports.getAllEmployees = async (req, res) => {
  let sort = false;
  if (req.body.sort) {
    sort = req.body.sort;
  }
  try {
    if (sort === false) {
      employeeSchema.find().then((data) => {
        res.status(200).json(data);
      });
    } else if (sort === "email") {
      employeeSchema
        .find()
        .sort({ Email: 1 })
        .then((data) => {
          res.status(200).json(data);
        });
    } else if (sort === "Date") {
      employeeSchema
        .find()
        .sort({ createdAt: 1 })
        .then((data) => {
          res.status(200).json(data);
        });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

// Search

exports.searchEmployee = async (req, res) => {
  const searchKeyword = req.query.search;
  try {
    employeeSchema
      .find({ Name: { $regex: ".*" + searchKeyword + ".*", $options: "i" } })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json(error);
  }
};
