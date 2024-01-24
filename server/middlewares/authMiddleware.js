const jwt = require("jsonwebtoken");
const userModel = require("../models/User");
const asyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const result = require("../utils/result");

dotenv.config();

exports.preventAccess = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await userModel.findById(decoded.id).select("password");
      next();
    } catch (error) {
      result.error(res, 401, "Not Authorized");
    }
  }
  if (!token) {
    result.error(res, 401, "Not Authorized, Token Not Found");
  }
});
