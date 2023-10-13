/* User routes */
import express from "express";
/* Controller */
import { userSignUp } from "../controllers/userController.js";

/* Middlewares */
import { passwordValidator } from "../middlewares/passwordValidator.js";

const router = express.Router();

router.post("/auth/signup", passwordValidator, userSignUp);

export default router;
