import { Types } from "mongoose"

interface IUser {
  _id?: Types.ObjectId
  firstName: string,
  lastName: string,
  email: string,
  password: string
}

export {IUser}