const userModel = require("../models/User");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const util = require("../utils/common");
const result = require("../utils/result");
const { generateToken } = require("../utils/jwtHelper");

exports.registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (util.isEmpty(username) || util.isEmpty(email) || util.isEmpty(password)) {
    result.error(res, 400, "Required Fields Empty!");
  }

  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    result.error(res, 400, "Existing User");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await userModel.create({
    username,
    email,
    password: hashedPassword,
  });

  if (user) {
    user.token = generateToken(user._id);
    result.success(res, user, "User Created Successfully");
  } else {
    result.error(res, 400, "Invalid User: Creation Failed");
  }
});

exports.loginUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (
    (util.isEmpty(username) && util.isEmpty(email) && util.isEmpty(password)) ||
    (util.isEmpty(username) &&
      !util.isEmpty(email) &&
      util.isEmpty(password)) ||
    (!util.isEmpty(username) &&
      util.isEmpty(email) &&
      util.isEmpty(password)) ||
    util.isEmpty(password)
  ) {
    return result.error(res, 400, "Required Fields Empty!");
  }

  let existingUser;
  if (!util.isEmpty(username)) {
    existingUser = await userModel.findOne({ username });
  } else {
    existingUser = await userModel.findOne({ email });
  }
  if (existingUser) {
    const token = generateToken(existingUser._id);

    if (bcrypt.compare(password, existingUser.password)) {
      await existingUser.save();
      result.success(
        res,
        { existingUser, token },
        "Login Finished Successfully"
      );
    } else {
      result.error(res, 400, "Invalid Credentials");
    }
  } else {
    result.error(res, 400, "User not found");
  }
});
