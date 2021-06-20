const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const HttpError = require("../error/errors");

const userSignup = async (req, res, next) => {
  const { firstname, lastname, email, password, dob } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({
      email: email,
    });
  } catch (err) {
    console.log(err);
    const error = new HttpError("Signup failed, please try again later", 500);
    return next(error);
  }
  if (existingUser) {
    const error = new HttpError("Email already in use", 422);
    return next(error);
  }
  
  let hashedPasswaord;
  try {
    hashedPasswaord = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError("Password encryption failed", 500);
    return next(error);
  }

  const createdUser = new User({
    name: firstname,
    name1: lastname,
    password: hashedPasswaord,
    email: email,
    dob: dob,
    role: 'User'
  });

  try {
    await createdUser.save();
    
  } catch (err) {
    console.log(err);
    const error = new HttpError("Signup failed", 500);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      {
        userId: existingUser.id,
        email: existingUser.email,
      },
      "userSecretKey",
      { expiresIn: "" }
    );

  } catch (err) {
    const error = new HttpError("Login Failed, Please try again later", 403);
    return next(error);
  }
  return res.json({userId: createdUser.id, email: createdUser.email, token: token});
};

const userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({
      email: email,
    });

  } catch (err) {
    const error = new HttpError("Login failed, Please try later", 500);
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError("Invalid Credentials, Please try later", 403);
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError("Invalid Credentials, Please try later", 403);
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError("Invalid Credentials, Please try later", 403);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      {
        userId: existingUser.id,
        email: existingUser.email
      },
      "userSecretKey",
      { expiresIn: "" }
    );

  } catch (err) {
    const error = new HttpError("Login Failed, Please try later", 403);
    return next(error);
  }

  res.status(200).json({
    email: existingUser.email,
    token: token
  });
};

const userGetInfo = (req, res, next) => {
  console.log(req.query);
  console.log(req.params);

  res.json({
    user: {
      name: "Priya",
      age: 20,
    },
  });
};

const createPost = (req, res, next) => {
    return res.json({
      "message": `Post created by user ${req.user.email}`
    });
  };

exports.userSignup = userSignup;
exports.userLogin = userLogin;
exports.userInfo = userGetInfo;
exports.createPost = createPost;