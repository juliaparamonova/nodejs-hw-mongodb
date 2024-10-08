import { startServer } from './services/server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

const boostrap = async () => {
  await initMongoConnection();
  startServer();
};

startServer();
