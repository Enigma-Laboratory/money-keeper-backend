import { Request, Response, NextFunction } from 'express';
import { HttpError } from '@/errors';
import logger from '@/utils/logger';

const AdditionalHttpStatusCodes = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
  try {
    logger.error({ type: 'Internal Server Error.', message: err.message, stack: err.stack });
    res.status(500).json({ message: err.message });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error.' });
  }
};

export default AdditionalHttpStatusCodes;
