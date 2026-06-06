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

const updateTask = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params
    const { title, description, isCompleted } = req.body
    const updatedTask = await Task.findByIdAndUpdate(id, { title, description }, { new: true })
    return res.status(200).json({ success: true, message: "Task updated successfully", data: updatedTask })
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error", error: error })
  }
}

const deleteTask = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params
    await Task.findByIdAndDelete(id)
    return res.status(200).json({ success: true, message: "Task deleted successfully" })
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error", error: error })
  }
}

export { getTasks, createTask, updateTask, deleteTask }