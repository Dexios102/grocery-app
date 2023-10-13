/* User routes */
import express from "express";
/* Controller */
import { userSignUp, userSignIn } from "../controllers/userController.js";

/* Middlewares */
import { passwordValidator } from "../middlewares/passwordValidator.js";

const router = express.Router();

router.post("/auth/signup", passwordValidator, userSignUp);
router.post("/auth/signin", userSignIn);

export default router;
