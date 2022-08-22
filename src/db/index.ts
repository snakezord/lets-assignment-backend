import mongoose from 'mongoose';
import { resolve } from 'path';
import { config } from 'dotenv';

config({ path: resolve(__dirname, `../../config/${process.env.ENVIRONMENT}.env`) });

mongoose.connect(process.env.MONGODB_URL);
