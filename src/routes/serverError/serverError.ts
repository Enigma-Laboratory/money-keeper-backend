import { Request, Response, NextFunction } from 'express';
import { HttpError } from '@/errors';

const AdditionalHttpStatusCodes = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(err.status).json(err.toObject());
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default AdditionalHttpStatusCodes;
