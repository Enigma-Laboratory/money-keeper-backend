import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

async function connect() {
  // const dbUri = config.get<string>('dbUri');
  const dbUri = 'mongodb+srv://tutuanle:5KceUHEmgGf2Brct@money-keeper.zuvtb7i.mongodb.net/?retryWrites=true&w=majority';
  logger.info('🚀 DB_URI = ', dbUri);
  try {
    await mongoose.connect(dbUri);
    logger.info('DB connected');
  } catch (error) {
    logger.error('Could not connect to db');
    process.exit(1);
  }
}

export default connect;
