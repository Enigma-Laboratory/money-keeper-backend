import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

async function connect() {
  const dbUri = config.get<string>('dbUri');
  console.log(`🚀 ~ file: connect.ts:7 ~ connect ~ dbUri: ${dbUri}`);

  try {
    await mongoose.connect(dbUri);
    logger.info('DB connected');
  } catch (error) {
    logger.error('Could not connect to db');
    process.exit(1);
  }
}

export default connect;
