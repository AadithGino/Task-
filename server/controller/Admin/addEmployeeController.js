const employeeSchema = require("../../model/employeeModel");

// add Employee

exports.addEmployee = async (req, res) => {
  const Name = req.body.Name;
  const Email = req.body.Email;
  const Mobile = req.body.Mobile;
  const Designation = req.body.Designation;
  const Gender = req.body.Gender;
  const Course = req.body.Course;
  const Image = req.body.Image;
  console.log(Image);

  try {
    const details = {
      Name,
      Email,
      Mobile,
      Designation,
      Gender,
      Course,
      Image,
    };

    // checking Whether Email Exists

    employeeSchema.findOne({ Email: Email }).then((email) => {
      if (email == null) {
        // checking Whether Number Exists

        employeeSchema.findOne({ Mobile: Mobile }).then((mobile) => {
          if (mobile == null) {
            // creating Employee

            employeeSchema.create(details).then((data) => {
              res.status(201).json(data);
            });
          } else {
            res.status(400).json("Number Already Exists");
          }
        });
      } else {
        res.status(400).json("Email Already Exists");
      }
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

// edit employee

exports.editEmployee = async (req, res) => {
  const Name = req.body.Name;
  const Email = req.body.Email;
  const Mobile = req.body.Mobile;
  const Designation = req.body.Designation;
  const Gender = req.body.Gender;
  const Course = req.body.Course;
  const Image = req.body.Image;
  const id = req.body.id;

  const details = {
    Name,
    Email,
    Mobile,
    Designation,
    Gender,
    Course,
    Image,
  };

  try {
    let employeeEmail;
    let employeeNumber;
    let employee = await employeeSchema.findOne({ _id: id });

    if (employee.Email != Email) {
      employeeEmail = await employeeSchema.findOne({ Email: Email });
    }

    if (employee.Mobile != Mobile) {
      employeeNumber = await employeeSchema.findOne({ Mobile: Mobile });
    }

    if (employeeEmail) {
      res.status(400).json("EMAIL ALREADY EXISTS");
      console.log("EMAIL EXISTS");
    } else if (employeeNumber) {
      res.status(400).json("NUMBER ALREADY EXISTS");
      console.log("NUMBER EXISTS");
    } else {
      employeeSchema.updateOne({_id:id},{$set:details}).then((data)=>{
        res.status(200).json("UPDATED SUCCESSFULLY")
        console.log("OK!!");
      })
    }
  } catch (error) {}
};

// delete Employee

exports.deleteEmployee = async (req, res) => {
  const id = req.query.id;

  try {
    employeeSchema.deleteOne({ _id: id }).then((data) => {
      res.status(200).json("Employee Deleted Successfully"+id);
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getSingleEmployee = async (req, res) => {
  const id = req.query.id;
  employeeSchema.findOne({ _id: id }).then((data) => {
    res.status(200).json(data);
  });
};
