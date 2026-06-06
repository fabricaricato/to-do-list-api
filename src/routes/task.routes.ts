import { Router } from "express"
import { getTasks, createTask, updateTask, deleteTask } from "../controllers/task.controller"

const taskRoutes = Router()

taskRoutes.get("/", getTasks)
taskRoutes.post("/", createTask)
taskRoutes.patch("/:id", updateTask)
taskRoutes.delete("/:id", deleteTask)

export default taskRoutes