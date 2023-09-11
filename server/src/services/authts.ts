import jwt, { JwtPayload } from "jsonwebtoken";
import path from "path";
import { Response, NextFunction } from "express";
import { verifiedToken } from "../types/authType";
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

export function verifyToken(
  req: verifiedToken,
  res: Response,
  next: NextFunction
) {
  const token: string =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res
      .status(403)
      .json({ error: "A token is required for authentication" });
  }
  try {
    const decoded = jwt.verify(
      token,
      process.env.TOKEN_KEY as string
    ) as JwtPayload;
    req.username = decoded.username;
    req.userID = decoded.userID;
  } catch (err) {
    return res.status(401).json({ error: "Invalid Token" });
  }
  return next();
}
