import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  //This will initalize the creation of the Token
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  //Set the Token as an HTTP-Only Cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
  });
};

export default generateToken;
