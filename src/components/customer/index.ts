import { Request, Response } from 'express';
import * as AuthUseCases from './use-cases';

import logger from '../../utils/logger';
import { CustomerValidation } from './validation';

export async function getOneUserHandler(req: Request, res: Response) {
  try {
    const { email } = req.params;

    const validate = CustomerValidation.instance.getOneUserValidation({ email });
    if (validate.error) {
      logger.error(`not get user by ${validate.error.message} `);
      return res.status(409).send(validate.error.message);
    }

    const user = await AuthUseCases.getOneUser(email);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.send(user);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function getAllUsesHandler(req: Request, res: Response) {
  try {
    const users = await AuthUseCases.getAllUsers();
    return res.send(users);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
