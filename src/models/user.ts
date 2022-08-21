import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail';

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(v: any) {
      if (!isEmail(v)) throw new Error('Email is invalid');
    },
  },
  phone: {
    type: String,
    required: true,
  },
  avatarBase64: {
    type: String,
    required: true,
  },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
  },
  sitRow: {
    type: Number,
  },
  sitPlace: {
    type: Number,
  },
});

const User = mongoose.model('User', schema);

export default User;
