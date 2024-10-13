import e from 'express';
import mongoose from 'mongoose';
import { env } from '../utilis/env.js';

export const initMongoConnection = async () => {
  try {
    const user = env('MONGODB_USER');
    const pwd = env('MONGODB_PASSWORD');
    const url = env('MONGODB_URL');
    const db = env('MONGODB_DB');

    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority`
    );
    console.log('Mongodb connection successfully');
  } catch (error) {
    console.log('Error while setting up Mongodb connection', error);
    throw e;
  }
};
