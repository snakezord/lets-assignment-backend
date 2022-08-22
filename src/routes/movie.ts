import express from 'express';
import Movie from '../models/movie';

const router = express.Router();

router.get('/movies', async (_, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).send(movies);
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
});

export default router;
