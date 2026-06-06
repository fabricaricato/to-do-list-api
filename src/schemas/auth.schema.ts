import { z } from "zod"

const userValidationSchema = z.object({
  firstName: z.string().trim().min(2, "First name is required"),
  lastName: z.string().trim().min(2, "Last name is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

const loginValidationSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(1, "Password is required"),
})

const partialUserSchema = userValidationSchema.partial()

export { userValidationSchema, loginValidationSchema, partialUserSchema }
