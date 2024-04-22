import logger from '@/utils/logger';
import * as OperationalSettingUseCases from './use-cases';
import { NextFunction, Response, Request } from 'express';

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

export async function getAllOperationalSettingHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const operationalSettings = await OperationalSettingUseCases.getAllOperationalSettings();
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
