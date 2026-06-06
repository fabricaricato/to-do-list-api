import { Router } from "express"
import { getTasks, createTask } from "../controllers/task.controller"

const taskRoutes = Router()

taskRoutes.get("/", getTasks)
taskRoutes.post("/", createTask)

export default taskRoutes