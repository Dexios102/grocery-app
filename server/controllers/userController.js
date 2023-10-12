/* User Controller */
import User from "../models/userModel.js";
import jwtSign from "../utils/jwtSign.js";

import asyncHandler from "express-async-handler";
import bcyrpt from "bcrypt";

export const userSignUp = asyncHandler(async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  const userExisted = await User.findOne({ email });
  userExisted ? res.status(400).json({ message: "User already exists" }) : null;
  password !== confirmPassword
    ? res.status(400).json({ message: "Passwords do not match" })
    : null;
  const hashedPassword = await bcyrpt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  user
    ? (jwtSign(res, user._id),
      res.status(201).json({ message: "User created", _id: user._id, user }))
    : res.status(400).json({ message: "User not created" });
});
