import prisma from "../config/prisma";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import { CustomError } from "../middleware/customError";

const SECRET_KEY = process.env.JWT_SECRET || "default_secret_key";

export const userService = {
  registerUser: async (
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    if (password !== confirmPassword) {
      throw new CustomError(
        400,
        "Password and its confirmation must be the same.",
        null
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    return prisma.user.create({
      data: { email, password: hashedPassword },
    });
  },

  loginUser: async (email: string, password: string) => {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error("Invalid email or password");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid email or password");

    const token = await jwt.sign(
      { id: user.id, email: user.email },
      SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    return { token, user };
  },
};
