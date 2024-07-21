import AsyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public

const authUser = AsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

// @desc    Register a new user
// @route   POST /api/users/auth
// @access  Public

const registerUser = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exist");
  }
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  }

  res.status(200).json({ message: "Register User" });
});

// @desc    Logout new user
// @route   POST /api/users/auth
// @access  Public
const logoutUser = AsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" });
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = AsyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile" });
});

// @desc    Update user profile
// @route   Put /api/users/profile
// @access  Public
const updateUserProfile = AsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User Profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
