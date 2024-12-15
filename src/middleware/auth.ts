import { Request, Response, NextFunction } from "express";
import { CustomError } from "./customError";
const jwt = require("jsonwebtoken");

export const authenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const SECRET_KEY = process.env.JWT_SECRET;
  const token = req.cookies.authToken;
  if (!token) {
    throw new CustomError(401, "Unauthorized", null);
  }
  try {
    jwt.verify(token, SECRET_KEY);  
    next();
  } catch (err) {
    res.status(403).json({ error: true, message: "Forbidden" });
  }
};
