import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../../../errors';

export const InternalServerError = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status).json(err.toObject());
};
