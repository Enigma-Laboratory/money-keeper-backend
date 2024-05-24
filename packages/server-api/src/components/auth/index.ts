import logger from '@/utils/logger';
import { NextFunction, Request, Response } from 'express';
import * as AuthUseCases from './use-cases';

export interface RequestWithUser extends Request {
  actor?: object | string;
}

export async function signInHandler(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
  try {
    const token = await AuthUseCases.signIn(req.body);
    res.status(200).json(token);
  } catch (error) {
    logger.error({
      component: 'AuthService',
      func: 'postSignInHandler',
      additionalInfo: error,
    });
    return next(error);
  }
}

export async function signUpHandler(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
  try {
    const user = await AuthUseCases.signUp(req.body);
    res.status(200).send(user);
  } catch (error) {
    logger.error({
      component: 'AuthService',
      func: 'postSignUpHandler',
      additionalInfo: error,
    });
    return next(error);
  }
}

export async function resetPasswordHandler(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
  try {
    await AuthUseCases.resetPasswordByEmail(req.body.email);
    res.status(200).send({ message: 'Password reset instructions have been sent to your email address' });
  } catch (error) {
    logger.error({
      component: 'AuthService',
      func: 'postForgotPasswordHandler',
      additionalInfo: error,
    });
    return next(error);
  }
}

export async function refreshTokenHandler(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
  try {
    const { refreshToken } = req.body;
    const newAccessToken = await AuthUseCases.refreshToken(refreshToken);
    res.status(200).json(newAccessToken);
  } catch (error) {
    logger.error({
      component: 'AuthService',
      func: 'refreshTokenHandler',
      additionalInfo: error,
    });
    return next(error);
  }
}

export async function signOutHandler(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
  try {
    const { refreshToken } = req.body;
    await AuthUseCases.signOut(refreshToken);
    res.status(200).json({ message: 'Sign out successful' });
    console.log('Sign out successful');
  } catch (error) {
    logger.error({
      component: 'AuthService',
      func: 'signOutHandler',
      additionalInfo: error,
    });
    return next(error);
  }
}
