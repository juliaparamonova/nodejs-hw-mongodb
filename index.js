import { setupServer } from './server.js';
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './src/constants/index.js';
import { initMongoDB } from './src/db/initMongoConnection.js';
import { createDirIfNotExists } from './src/utilis/createDirIfNotExists.js';

const bootstrap = async () => {
  await initMongoDB();
  await createDirIfNotExists(TEMP_UPLOAD_DIR);
  await createDirIfNotExists(UPLOAD_DIR);
  setupServer();
};
bootstrap();
