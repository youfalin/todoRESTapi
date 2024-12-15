import { Request, Response, NextFunction } from "express";
import { userService } from "../services/user.service";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password, confirmPassword } = req.body;
  try {
    const user = await userService.registerUser(
      email,
      password,
      confirmPassword
    );
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await userService.loginUser(email, password);
    res.cookie("authToken", token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production" || true, // Use secure cookies in production
      sameSite: "strict", // Prevent CSRF
      maxAge: 60 * 60 * 1000, // 1 hour
    });
    res.status(200).json({ user, token });
  } catch (err) {
    next(err);
  }
};

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.clearCookie("authToken", {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (err) {
    next(err);
  }
};
