import request from 'supertest';

import app from '../src/app';
import Movie from '../src/models/movie';
import User from '../src/models/user';
import { userOneId, userOne, userTwo, cleanDB } from './fixtures/db';

beforeEach(cleanDB);

test('should create new user without movie', async () => {
  const response = await request(app).post('/register').send(userOne).expect(201);
  const user = await User.findById(response.body._id);
  console.log({ user });
  expect(user).not.toBeNull();
});

test('should create new user with movie', async () => {
  const response = await request(app).post('/register').send(userTwo).expect(201);
  const user = await User.findById(response.body._id);
  console.log({ user });
  expect(user).not.toBeNull();
  const movie = await Movie.findById(user?.movie?._id);
  console.log({ movie });
  expect(movie).not.toBeNull();
});
