/* User Controller */
import User from "../models/userModel.js";
import jwtSign from "../utils/jwtSign.js";
import bcyrpt from "bcrypt";

export const userSignUp = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  try {
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    const existedUser = await User.findOne({ email: email });
    if (existedUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const salt = await bcyrpt.genSalt(10);
    const hashedPassword = await bcyrpt.hash(password, salt);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    const token = jwtSign(res, user._id);
    return res.status(200).json({ message: "User created successfully", user });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const userSignIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await bcyrpt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwtSign(res, user._id);
    const data = {
      _id: user._id,
      username: user.username,
      email: user.email,
    };
    return res
      .status(200)
      .json({ message: "User signed in successfully", data });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const data = {
      _id: user._id,
      username: user.username,
      email: user.email,
    };
    return res.status(200).json({ message: "Welcome to iGrocery", data });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const logoutUser = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  return res.status(200).json({ message: "User logged out successfully" });
};

export const updateProfile = async (req, res) => {
  const { username, oldPassword, password, confirmPassword } = req.body;
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcyrpt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    const salt = await bcyrpt.genSalt(10);
    const hashedPassword = await bcyrpt.hash(password, salt);
    const updatedUser = await User.findByIdAndUpdate(req.user._id, {
      username,
      password: hashedPassword,
    });
    res
      .status(200)
      .json({ message: "Profile updated successfully", updatedUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
