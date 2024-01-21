//This file and folder helps to keep the functionality in one spot AKA the MiddleWare
//It help to keep an orgranized file structure
//and in my opinion helps you write clean and readable code
//For the USERS

import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
//We are importing the function for web tokens from the utils file
import generateToken from "../utils/generateToken.js";

// @description Auth user & get token
// @Routes POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password dummy");
  }
});

// @description Register user & get token
// @Routes POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @description log out user / clear cookie
// @Routes POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
  //We clear the cookie to log out
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out Successfully" });
});

// @description get user profile
// @Routes GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

// @description update user profile
// @Routes PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.bosy.password;
    }
    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

// @description GET all users
// @Routes GET /api/users
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get all users");
});

// @description GET  users by id
// @Routes GET /api/users/:id
// @access Private/Admin
const getUserByID = asyncHandler(async (req, res) => {
  res.send("get user id");
});

// @description DELETE all users
// @Routes DELETE /api/users/:id
// @access Private/Admin
const deleteUsers = asyncHandler(async (req, res) => {
  res.send("DELETE users");
});

// @description Update all users
// @Routes PUT /api/users/:id
// @access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("Update users");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUsers,
  getUserByID,
  updateUser,
};
