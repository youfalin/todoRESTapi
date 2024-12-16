import express from "express";
import todoRoutes from "./routes/todo.routes";
import userRoutes from "./routes/user.routes";
const cookieParser = require('cookie-parser');
import { errorHandler } from "./middleware/errorHandler";
import { authenticated } from "./middleware/auth";

const app = express();

// Middleware
app.use(express.json());

// cookie parser
app.use(cookieParser());

// Routes
app.use("/api/todos", authenticated, todoRoutes);
app.use("/api/users", userRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;
