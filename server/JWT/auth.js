const asynchandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const protect = asynchandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      console.log(token + "This is the token...");
      const decoded = jwt.verify(token, "jwttoken1234"); // this jwttoken1234 should be in env (but for now it is being added here )
      
      next();
    } catch (error) {
      res.status(401).json("TOKEN INVALID");
    }
  }

  if (!token) {
    res.status(401).json("Token Not Found");
    console.log("U");
  }
});

module.exports = { protect };
