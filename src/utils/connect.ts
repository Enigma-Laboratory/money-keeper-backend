import mongoose from 'mongoose';
import logger from './logger';

async function connect() {
  logger.info(`DB_URI = ${process.env.DB_URI}`);
  try {
    await mongoose.connect(process.env.DB_URI || '');
    logger.info('DB connected');
  } catch (error) {
    logger.error('Could not connect to db');
    process.exit(1);
  }
}

export default connect;
