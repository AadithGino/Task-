const mognoose = require("mongoose");
const moment = require("moment");

const employeeSchema = mognoose.Schema({
  Name: { type: String },
  Email: { type: String },
  Mobile: { type: Number },
  Designation: { type: String },
  Gender: { type: String },
  Course: { type: String },
  Image: { type: String },
  Date: { type: Date, default: moment().format('L')},
});

const model = mognoose.model("Employee", employeeSchema);

module.exports = model;
