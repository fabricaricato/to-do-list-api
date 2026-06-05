import express from 'express';
import cors from 'cors';
import { connectDb } from './config/database';
import authRoutes from "./routes/auth.routes"

connectDb()
const PORT = process.env.PORT;

const server = express();

server.use(cors());
server.use(express.json());

server.use('/api/auth', authRoutes);

server.listen(PORT, () => {
  console.log(`🟢 Server running on port ${PORT} 🟢`);
});