import mongoose from 'mongoose';

import { env } from '../utilis/env.js';

export const initMongoConnection = async () => {
  try {
    const user = env('MONGODB_USER');
    const password = env('MONGODB_PASSWORD');
    const url = env('MONGODB_URL');
    const db = env('MONGODB_DB');
    await mongoose.connect(
      `mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log('Mongodb connection successfully');
  } catch (error) {
    console.log('Error while setting up Mongodb connection', error);
    throw error;
  }
};
