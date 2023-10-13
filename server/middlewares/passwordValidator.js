/* Password Validator */

import { passwordStrength } from "check-password-strength";

export const passwordValidator = (req, res, next) => {
  const { password } = req.body;
  const strength = passwordStrength(password);
  if (strength.id <= 2) {
    return res.status(400).json({ message: `Password is ${strength.value}` });
  }
  next();
};
