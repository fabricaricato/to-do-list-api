import { Router } from "express"
import { getTasks, createTask, updateTask, deleteTask } from "../controllers/task.controller"
import { validateMiddleware } from "../middleware/validate.middleware"
import { partialTaskSchema, taskValidationSchema } from "../schemas/task.schema"

const taskRoutes = Router()

taskRoutes.get("/", getTasks)
taskRoutes.post("/", validateMiddleware(taskValidationSchema), createTask)
taskRoutes.patch("/:id", validateMiddleware(partialTaskSchema), updateTask)
taskRoutes.delete("/:id", deleteTask)

export default taskRoutes