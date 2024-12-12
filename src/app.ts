import express from "express";
import todoRoutes from "./routes/todo.routes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/todos", todoRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;
