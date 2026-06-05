import express from 'express';
import cors from 'cors';
import { connectDb } from './config/database';

connectDb()

const server = express();

server.use(cors());
server.use(express.json());

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});