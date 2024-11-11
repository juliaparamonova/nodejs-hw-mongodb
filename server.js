import express from 'express';
import cors from 'cors';
import { env } from './src/utilis/env.js';
import { errorHandler } from './src/middlewares/errorHandler.js';
import { notFoundHandler } from './src/middlewares/notFoundHandler.js';
import cookieParser from 'cookie-parser';
import router from './src/routers/index.js';
import { UPLOAD_DIR } from './src/constants/index.js';
import handlebars from 'handlebars';
const { log } = handlebars;

const PORT = Number(env('PORT', '3000'));

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());
  app.use('/uploads', express.static(UPLOAD_DIR));

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world ^_^',
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  app.use(router);

  app.use('*', notFoundHandler);

  app.use(errorHandler);
};
