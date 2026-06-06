import { Request, Response } from "express"
import Task from "../models/task.model"
import { AuthRequest } from "../middleware/auth.middleware"

const getTasks = async (req: AuthRequest, res: Response) => {
  try {
    const tasks = await Task.find({ userId: req.user?._id })
    return res.status(200).json({ success: true, message: "Tasks fetched successfully", data: tasks })
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error", error: error })
  }
}

const createTask = async (req: AuthRequest, res: Response) => {
  try {
    const { title, description } = req.body
    const newTask = await Task.create({ title, description, userId: req.user?._id })
    return res.status(201).json({ success: true, message: "Task created successfully", data: newTask })
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error", error: error })
  }
}

export { getTasks, createTask }