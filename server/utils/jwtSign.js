/* JWT Sign */
import jsonwebtoken from "jsonwebtoken";

const jwtSign = (userId) => {
  return jsonwebtoken.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

export default jwtSign;
