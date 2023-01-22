const employeeSchema = require("../../model/employeeModel");

// fetching all employees

exports.getAllEmployees = async (req, res) => {
  let sort = false;
  let page = 1;
  if (req.body.sort) {
    sort = req.body.sort;
    console.log(sort);
  }

  if (req.body.page) {
    page = req.body.page;
  }
  try {
    const count = await employeeSchema.count()
    if (sort === false) {
      employeeSchema
        .find()
        // .limit(5)
        .skip((page - 1) * 5)
        .then((data) => {
          res.status(200).json(data);
        });
    } else if (sort === "Email") {
      console.log("EMAIL SORT");
      employeeSchema
        .find()
        .limit(5)
        .skip((page - 1) * 5)
        .sort({ Email: 1 })
        .then((data) => {
          res.status(200).json(data);
        });
    } else if (sort === "Date") {
      console.log("DATE SORT");
      employeeSchema
        .find()
        .limit(5)
        .skip((page - 1) * 5)
        .sort({ Mobile: 1 })
        .then((data) => {
          res.status(200).json(data);
        });
    }else if(sort === "Name"){
      employeeSchema
        .find()
        .limit(5)
        .skip((page - 1) * 5)
        .sort({ Name: 1 })
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
