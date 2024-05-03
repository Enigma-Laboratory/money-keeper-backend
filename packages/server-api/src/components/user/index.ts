import logger from '@/utils/logger';
import { NextFunction, Request, Response } from 'express';
import * as UserUseCases from './use-cases';
import { UserValidation } from './validation';

export async function getOneUserHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const _id = req.url.replace('/', '');
    const user = await UserUseCases.getOneUser({ _id });
    res.status(200).send(user);
  } catch (error) {
    logger.error({
      component: 'UserService',
      func: 'getOneUserHandler',
      additionalInfo: error,
    });
    next(error);
  }
}

export async function getAllUserHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const users = await UserUseCases.getAllUsers();
    res.status(200).send(users);
  } catch (error) {
    logger.error({
      component: 'UserService',
      func: 'getAllUserHandler',
      additionalInfo: error,
    });
    next(error);
  }
}

export async function updateOneUserHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    UserValidation.instance.updateOneUserValidation(req.body);

    const user = await UserUseCases.updateOneUser(req.body);
    res.status(200).send(user);
  } catch (error) {
    logger.error({
      component: 'UserService',
      func: 'putOneUserHandler',
      additionalInfo: error,
    });
    next(error);
  }
}
