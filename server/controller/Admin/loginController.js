const adminSchema = require("../../model/adminModel");
const bcrypt = require("bcrypt");


// admin Signup

exports.adminSignup = async (req, res) => {
  const userName = req.body.userName;
  const password = await bcrypt.hash(req.body.password, 10);
  const details = {
    userName,
    password,
  };
  try {
    adminSchema.findOne({ userName: userName }).then((result) => {
      console.log(result);
      if (result==null) {
        adminSchema.create(details).then((data) => {
          res.status(200).json(data);
        });
      } else {
        res.status(400).json("UserName already Exists");
      }
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

// admin Login

exports.adminLogin = async (req, res) => {
  const userName = req.body.userName;
  try {
    adminSchema.findOne({ userName: userName }).then((result) => {
      if (result) {
        bcrypt.compare(
          req.body.password,
          result.password,
          function (err, data) {
            if (data) {
              let details = {
                _id: result._id,
                userName,
                // token: generateToken(result._id),
              };
              res.status(200).json(details);
            } else {
              res.status(401).json("INCORRECT PASSWORD");
            }
          }
        );
      } else {
        res.status(401).json("Admin Details Not found");
      }
    });
  } catch (error) {
    res.status(401).json(error);
  }
};
