import { NextFunction, Request, Response } from 'express';
import * as UserUseCases from './use-cases';
import logger from '@/utils/logger';
import { removeFieldsNotUse } from '@/shared/transformedData';
import { UserValidation } from './validation';
import { BadRequestError } from '@/errors';

export async function getOneUserHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const user = await UserUseCases.getOneUser(req.params);
    res.status(200).send(user);
  } catch (error) {
    logger.error({ component: 'UserService', func: 'getOneUserHandler', additionalInfo: error });
    next(error);
  }
}

export async function getAllUserHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const users = await UserUseCases.getAllUsers();
    res.status(200).send(users);
  } catch (error) {
    logger.error({ component: 'UserService', func: 'getAllUserHandler', additionalInfo: error });
    next(error);
  }
}

export async function putOneUserHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const body = req.body;
    const id = req.url.match(/\/(.*?)\//)![1];

    const validate = UserValidation.instance.putOneUserValidation({ id, ...body });
    if (validate.error) throw new BadRequestError(validate.error.message);

    const user = await UserUseCases.putOneUser({ id }, body);
    res.status(200).send(user);
  } catch (error) {
    logger.error({ component: 'UserService', func: 'putOneUserHandler', additionalInfo: error });
    next(error);
  }
}
