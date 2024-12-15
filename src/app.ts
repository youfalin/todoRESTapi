import express from "express";
import todoRoutes from "./routes/todo.routes";
<<<<<<< HEAD
import userRoutes from "./routes/user.routes";
const cookieParser = require('cookie-parser');
import { errorHandler } from "./middleware/errorHandler";
import { authenticated } from "./middleware/auth";
=======
import { errorHandler } from "./middleware/errorHandler";
>>>>>>> 0601cc808efaca5f653d441532dc0c45ef205f74

const app = express();

// Middleware
app.use(express.json());

<<<<<<< HEAD
// cookie parser
app.use(cookieParser());

// Routes
app.use("/api/todos", authenticated, todoRoutes);
app.use("/api/users", userRoutes);
=======
// Routes
app.use("/api/todos", todoRoutes);
>>>>>>> 0601cc808efaca5f653d441532dc0c45ef205f74

// Error handling middleware
app.use(errorHandler);

export default app;
