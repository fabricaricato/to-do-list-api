import { Request, Response } from "express"
import User from "../models/user.model"
import bcryptjs from "bcryptjs"

const register = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body
    const foundUser = await User.findOne({ email })
    if (foundUser) {
      return res.status(400).json({ success: false, message: "Email already registered, please login with it." })
    } else {
        const hash = await bcryptjs.hash(password, 10)
        const newUser = await User.create({
        firstName,
        lastName,
        email,
        password: hash
      })
      return res.status(201).json({ success: true, message: "User created successfully", data: newUser })
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error", error: error })
  }
}

export { register }