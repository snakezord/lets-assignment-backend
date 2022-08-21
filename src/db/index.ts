const mongoose = require('mongoose');
import 'dotenv/config';

mongoose.connect(process.env.MONGODB_URL);
