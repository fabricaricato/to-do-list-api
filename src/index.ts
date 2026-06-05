import express from 'express';
import cors from 'cors';

const server = express();

server.use(cors());
server.use(express.json());

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});