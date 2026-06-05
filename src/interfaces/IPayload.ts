import { Types } from "mongoose"

interface IPayload {
  _id: Types.ObjectId
  firstName: string
  lastName: string
  email: string
}

export { IPayload }