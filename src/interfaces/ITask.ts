import { Types } from "mongoose"

interface ITask {
  _id?: Types.ObjectId
  title: string
  description?: string
  isCompleted: boolean
  userId: Types.ObjectId
}

export { ITask }