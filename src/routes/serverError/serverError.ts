import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../../../errors';

export const InternalServerError = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof HttpError) {
    res.status(err.status).json(err.toObject());
  } else {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
