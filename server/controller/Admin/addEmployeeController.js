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
    res.status(400).json(error)
  }
};


// edit employee 

exports.editEmployee = async(req,res)=>{
  const id = req.query.id;
  try {
    employeeSchema.findOne({_id:id}).then((data)=>{
      res.status(200).json(data)
    })
  } catch (error) {
    res.status(400).json(error)
  }
}

// delete Employee 

exports.deleteEmployee = async(req,res)=>{
  const id = req.query.id;

  try {
    employeeSchema.deleteOne({_id:id}).then((data)=>{
      res.status(200).json(data)
    })
  } catch (error) {
    res.status(400).json(error)
  }
}