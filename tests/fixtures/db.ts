import { BASE_64_IMAGE } from './base_64_image';
const mongoose = require('mongoose');
import User from '../../src/models/user';
import Movie from '../../src/models/movie';

interface MovieI {
  _id: string;
  title: string;
  duration: number; // milliseconds
  startDate: Date;
}
interface UserI {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatarBase64: string;
  movie: MovieI | undefined;
  sitRow: number | undefined;
  sitPlace: number | undefined;
}

const userOneId: string = new mongoose.Types.ObjectId();

const userOne: UserI = {
  _id: userOneId,
  firstName: 'Mike',
  lastName: 'Mike',
  email: 'mike@example.com',
  phone: '921231234',
  avatarBase64: BASE_64_IMAGE,
  movie: undefined,
  sitRow: undefined,
  sitPlace: undefined,
};

const userTwoId: string = new mongoose.Types.ObjectId();

const movie: MovieI = {
  _id: new mongoose.Types.ObjectId(),
  title: 'First',
  duration: 1000 * 60 * 60,
  startDate: new Date(),
};

const userTwo: UserI = {
  _id: userTwoId,
  firstName: 'Gus',
  lastName: 'Gus',
  email: 'gus@example.com',
  phone: '14823269',
  avatarBase64: BASE_64_IMAGE,
  movie: movie,
  sitRow: 1,
  sitPlace: 2,
};

const cleanDB = async () => {
  await User.deleteMany();
  await Movie.deleteMany();
};

export { userOneId, userOne, userTwo, cleanDB };
