import logger from '@/utils/logger';
import { parseQueryParams } from '@/utils/parseQueryParams';
import { FindAllDailyUserParams } from '@enigma-laboratory/shared';
import { NextFunction, Request, Response } from 'express';
import { RequestWithUser } from '../auth';
import * as UserUseCases from './use-cases';
import { UserValidation } from './validation';

export async function getOneUserHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const email = req.url.replace('/', '');
    const user = await UserUseCases.getOneUser({ email });
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

export async function getDailyUserHandler(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
  try {
    const params = parseQueryParams(req.query);
    const dailyRevenue = await UserUseCases.getDailyUser(params as unknown as FindAllDailyUserParams);
    res.status(200).json(dailyRevenue);
  } catch (error) {
    logger.error({
      component: 'OrderService',
      func: 'getDailyUserHandler',
      additionalInfo: error,
    });
    next(error);
  }
}
