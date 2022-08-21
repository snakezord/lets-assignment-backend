import express from 'express';
import cors from 'cors';
import './db';

// Routes
import userRouter from './routes/user';
import movieRouter from './routes/movie';

const app = express();

app
  .use(express.json({ limit: '10mb' }))
  .use(cors())
  .use(userRouter)
  .use(movieRouter);

export default app;
