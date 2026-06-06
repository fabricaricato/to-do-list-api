import express from 'express';
import cors from 'cors';
import { connectDb } from './config/database';
import authRoutes from "./routes/auth.routes"
import taskRoutes from "./routes/task.routes"
import { authMiddleware } from './middleware/auth.middleware';

connectDb()
const PORT = process.env.PORT;

const server = express();

server.use(cors());
server.use(express.json());

server.use('/api/auth', authRoutes);
server.use('/api/tasks', authMiddleware, taskRoutes);

server.listen(PORT, () => {
  console.log(`🟢 Server running on port ${PORT} 🟢`);
});