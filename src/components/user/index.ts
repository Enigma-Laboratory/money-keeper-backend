import { NextFunction, Request, Response } from 'express';
import * as AuthUseCases from './use-cases';
import logger from '@/utils/logger';

export async function getOneUserHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const user = await AuthUseCases.getOneUser(req.params);
    res.status(200).send(user);
  } catch (error) {
    logger.error({ component: 'UserService', func: 'getOneUserHandler', additionalInfo: error });
    next(error);
  }
}

export async function getAllUsesHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const users = await AuthUseCases.getAllUsers();
    res.status(200).send(users);
  } catch (error) {
    logger.error({ component: 'UserService', func: 'getAllUserHandler', additionalInfo: error });
    next(error);
  }
}
