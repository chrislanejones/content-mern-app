import AsyncHandler from "express-async-handler";

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
  res.status(200).json({ message: "Get User Profile" });
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
