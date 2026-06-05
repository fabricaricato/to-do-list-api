import { Request, Response } from "express"
import User from "../models/user.model"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { IPayload } from "../interfaces/IPayload"

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

const login = async (req: Request, res: Response) => {
  try {
    const {email, password} = req.body
    const foundUser = await User.findOne({email})
    if (!foundUser) {
      return res.status(404).json({ success: false, message: "User not found" })
    } else {
      const isMatch = await bcryptjs.compare(password, foundUser.password)
      if (!isMatch) {
        return res.status(401).json({ success: false, message: "Invalid email or password" })
      } else {
        const payload:IPayload = { _id: foundUser._id, firstName: foundUser.firstName, lastName: foundUser.lastName, email: foundUser.email }
        const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "15m" })
        return res.status(200).json({ success: true, message: "User logged in successfully", data: { user: payload, token } })
      }
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error", error: error })
  }
}

export { register, login }