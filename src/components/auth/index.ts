import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import logger from '../../utils/logger';
import * as AuthUseCases from './use-cases';

export async function postSignInHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const token = await AuthUseCases.postSignIn(req.body);
    res.status(200).json({ token });
  } catch (error) {
    logger.error('Component: AuthService: ', { additionalInfo: error });
    return next(error);
  }
}

export async function postSignUpUserHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const user = await AuthUseCases.postSignUpUser(req.body);
    logger.info(user);
    res.status(200).send(user);
  } catch (error) {
    logger.error('Component: AuthService: ', { additionalInfo: error });
    return next(error);
  }
}
