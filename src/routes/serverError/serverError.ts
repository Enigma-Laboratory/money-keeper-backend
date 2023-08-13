import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../../../errors';

const AdditionalHttpStatusCodes = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status).json(err.toObject());
};

export default AdditionalHttpStatusCodes;
