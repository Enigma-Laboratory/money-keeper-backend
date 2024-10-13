import logger from '@/utils/logger';
import * as OperationalSettingUseCases from './use-cases';
import { NextFunction, Response, Request } from 'express';
import { RequestWithUser } from '@/interface';
import { User } from '@enigma-laboratory/shared';

export async function createOneOperationalSettingHandler(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const operationalSetting = await OperationalSettingUseCases.postCreateOperationalSettings(req.body);
    logger.info({
      component: 'OrderService',
      func: 'createOneOperationalSettingHandler',
      additionalInfo: operationalSetting,
    });
    res.status(200).send(operationalSetting);
  } catch (error) {
    logger.error({
      component: 'OperationalSettingService',
      func: 'createOneOperationalSettingHandler',
      additionalInfo: error,
    });
    next(error);
  }
}

export async function getAllOperationalSettingHandler(
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const operationalSettings = await OperationalSettingUseCases.getAllOperationalSettings(req?.actor as User);
    res.status(200).send(operationalSettings);
  } catch (error) {
    logger.error({
      component: 'OperationalSettingService',
      func: 'getAllOperationalSettingHandler',
      additionalInfo: error,
    });
    next(error);
  }
}

export async function updateOperationalStatusHandler(
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const operationalSetting = await OperationalSettingUseCases.updateOperationalStatus(req?.actor as User, req.body);
    res.status(200).send(operationalSetting);
  } catch (error) {
    logger.error({
      component: 'OperationalSettingService',
      func: 'updateOperationalStatusHandler',
      additionalInfo: error,
    });
    next(error);
  }
}
