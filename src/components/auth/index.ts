import { RequestWithUser } from '@/interface';
import logger from '@/utils/logger';
import { NextFunction, Response } from 'express';
import * as AuthUseCases from './use-cases';

export async function postSignInHandler(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
  try {
    const token = await AuthUseCases.postSignIn(req.body);
    res.status(200).json({ token });
  } catch (error) {
    logger.error({ component: 'AuthService', func: 'postSignInHandler', additionalInfo: error });
    return next(error);
  }
}

export async function postSignUpUserHandler(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
  try {
    const user = await AuthUseCases.postSignUpUser(req.body);
    res.status(200).send(user);
  } catch (error) {
    logger.error({ component: 'AuthService', func: 'postSignUpHandler', additionalInfo: error });
    return next(error);
  }
}
