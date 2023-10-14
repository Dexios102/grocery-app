/* User routes */
import express from "express";
/* Controller */
import {
  userSignUp,
  userSignIn,
  getProfile,
  updateProfile,
  logoutUser,
} from "../controllers/userController.js";

/* Middlewares */
import { passwordValidator } from "../middlewares/passwordValidator.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/auth/signup", passwordValidator, userSignUp);
router.post("/auth/signout", logoutUser);
router.post("/auth/signin", userSignIn);

router
  .route("/profile")
  .get(verifyToken, getProfile)
  .put(verifyToken, passwordValidator, updateProfile);

export default router;
