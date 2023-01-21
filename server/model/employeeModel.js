const mognoose = require("mongoose");

const employeeSchema = mognoose.Schema({
  Name: { type: String },
  Email: { type: String },
  Mobile: { type: Number, unique: true },
  Designation: { type: String },
  Gender: { type: String },
  Course: { type: String },
  Image: { type: String },
});

const model = mognoose.model("Employee", employeeSchema);

module.exports = model;
