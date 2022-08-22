import User from './../models/user';
import express from 'express';
import Movie from '../models/movie';
import { omit } from 'lodash';

const router = express.Router();

router
  .post('/register', async (req, res) => {
    try {
      if (req.body.movie) {
        const movie = new Movie(omit(req.body.movie, '_id'));
        await movie.save();
        const user = new User({ ...req.body, movie: movie._id });
        await user.save();
        return res.status(201).send(user);
      }
      const user = new User(req.body);
      await user.save();
      return res.status(201).send(user);
    } catch (error: any) {
      res.status(400).send({
        error: error.message,
      });
    }
  })
  .get('/users', async (_, res) => {
    try {
      const users = await User.find().populate('movie');
      res.status(200).send(users);
    } catch (error: any) {
      res.status(400).send({
        error: error.message,
      });
    }
  });

export default router;
