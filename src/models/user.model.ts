import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/IUser";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true })

const User = model<IUser>("User", userSchema)

export default User