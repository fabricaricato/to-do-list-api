import { Schema, model } from "mongoose";
import { ITask } from "../interfaces/ITask";

const taskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, { timestamps: true })

const Task = model<ITask>("Task", taskSchema)

export default Task