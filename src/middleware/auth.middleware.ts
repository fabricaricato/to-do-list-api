import {Request, Response, NextFunction} from "express"
import jwt from "jsonwebtoken"
import { IPayload } from "../interfaces/IPayload";

export interface AuthRequest extends Request {
  user?: IPayload;
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({success: false, message: "No token provided, authorization denied" });
    }
    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({success: false, message: "Invalid token format" });
    }
    const token = authHeader.split(" ")[1]
    if (!token) {
      return res.status(401).json({success: false, message: "Unauthorized" })
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string)
    req.user = decoded as IPayload
    next()
  } catch (error) {
    return res.status(401).json({ success: false, message: "Unauthorized" })
  }
}

export { authMiddleware }