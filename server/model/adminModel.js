const mognoose = require("mongoose");

const adminSchema = mognoose.Schema({
  userName: { type: String },
  password: { type: String },
});

const model = mognoose.model("Admin", adminSchema);

module.exports = model;
