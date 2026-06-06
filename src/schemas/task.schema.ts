import { z } from "zod"

const taskValidationSchema = z.object({
  title: z.string().min(2, "Title is required"),
  description: z.string().optional(),
  isCompleted: z.boolean().optional()
})

const partialTaskSchema = taskValidationSchema.partial()
export { taskValidationSchema, partialTaskSchema }
