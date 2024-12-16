import { Router } from "express";
import { register, login, logout } from "../controllers/user.controller";
import { validateSchema } from "../middleware/validateSchema";
import { registerSchema , loginSchema} from "../schemas/user.schema";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login",validateSchema(loginSchema) ,login);
router.post("/logout", logout);

export default router;
