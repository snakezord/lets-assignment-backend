import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
    default: null,
  },
});

const Movie = mongoose.model('Movie', schema);

export default Movie;
