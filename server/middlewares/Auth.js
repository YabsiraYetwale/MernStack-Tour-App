import jwt from "jsonwebtoken";
export const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    let verified;
    if (token) verified = jwt.verify(token, "secretKey");
    req.userId = verified.id;
    next();
  } catch (error) {
    console.log(error);
  }
};
