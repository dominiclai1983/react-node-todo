const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res
      .status(403)
      .json({ error: "A token is required for authentication" });
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    console.log(decoded);
    req.username = decoded.username;
    req.userID = decoded.userID;
  } catch (err) {
    return res.status(401).json({ error: "Invalid Token" });
  }
  return next();
};

module.exports = verifyToken;
