import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import logger from '../../utils/logger';
import * as OtherUseCases from './use-cases';
import { pick } from 'lodash';
import { OtherValidation } from './validation';

export async function loginHandler(req: Request, res: Response): Promise<any> {
  try {
    const validate = OtherValidation.instance.loginValidate(req.body);
    if (validate.error) {
      logger.error(`not create user by ${validate.error.message} `);
      return res.status(409).send(validate.error.message);
    }
    const validate2: any = await OtherUseCases.login(req.body); // [ ] review
    logger.info(validate2);
    if (validate2.error) return res.status(409).send(validate2);

    const token = jwt.sign(validate2.data, process.env.ACCESS_TOKEN_SECRET || '', {
      expiresIn: process.env.ACCESS_TOKEN_TTL || '10m',
    });
    return res.status(200).send({ ...validate2.data, token });
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function logoutHandler(req: Request, res: Response): Promise<any> {
  try {
    return res.send({ message: 'logout successfully' });
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
export async function registerUserHandler(req: Request, res: Response): Promise<any> {
  try {
    const user = await OtherUseCases.postCreateUser(req.body);
    logger.info(user);
    return res.status(200).send({ result: 'ok', data: pick(user, ['email', 'name', '_id']) });
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
