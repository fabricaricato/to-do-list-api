import { Router } from "express";
import { login, register } from "../controllers/auth.controller";
import { validateMiddleware } from "../middleware/validate.middleware";
import { loginValidationSchema, userValidationSchema } from "../schemas/auth.schema";

const authRoutes = Router()

authRoutes.post("/register", validateMiddleware(userValidationSchema), register)
authRoutes.post("/login", validateMiddleware(loginValidationSchema), login)

export default authRoutes