import { Router } from "express";
import {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todo.controller";

<<<<<<< HEAD

=======
>>>>>>> 0601cc808efaca5f653d441532dc0c45ef205f74
const router = Router();

router.get("/", getTodos);
router.get("/:id", getTodo);
router.post("/", createTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
