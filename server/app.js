const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const adminLoginRouter = require("./routes/Admin/adminLogin");
const adminAddEmployeeRouter = require("./routes/Admin/adminAddEmployee");
const adminHomeRouter = require("./routes/Admin/adminHomeRoute");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/", adminLoginRouter);
app.use("/", adminAddEmployeeRouter);
app.use("/", adminHomeRouter);


mongoose.connect(
  "mongodb+srv://aadithGino:9744052977@cluster0.yw3rutb.mongodb.net/?retryWrites=true&w=majority"
);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
