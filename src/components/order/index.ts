import { NextFunction, Request, Response } from 'express';
import logger from '@/utils/logger';
import * as OrderUseCases from './use-cases';

export async function postCreateOneOrderHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const order = await OrderUseCases.postCreateOneOrder(req.body);
    logger.info({ component: 'OrderService', func: 'postCreateOneOrderHandler', additionalInfo: order });
    res.status(200).send(order);
  } catch (error) {
    logger.error({ component: 'OrderService', func: 'postCreateOneOrderHandler', additionalInfo: error });
    next(error);
  }
}

export async function getAllOrderHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const orders = await OrderUseCases.getAllOrders(req.params);
    res.status(200).send(orders);
  } catch (error) {
    logger.error({ component: 'OrderService', func: 'getAllOrderHandler', additionalInfo: error });
    next(error);
  }
}

export async function getOneOrderHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const order = await OrderUseCases.getOneOrders(req.params);
    logger.info({ component: 'OrderService', func: 'getOneOrderHandler', additionalInfo: order });
    res.status(200).send(order);
  } catch (error) {
    logger.error({ component: 'OrderService', func: 'getOneOrderHandler', additionalInfo: error });
    next(error);
  }
}

export async function deleteOneOrderHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const deleteOrder = await OrderUseCases.deleteOneOrder(req.params);
    logger.info({ component: 'OrderService', func: 'deleteOneOrderHandler', additionalInfo: deleteOrder });
    res.status(200).send(deleteOrder);
  } catch (error) {
    logger.error({ component: 'OrderService', func: 'deleteOneOrderHandler', additionalInfo: error });
    next(error);
  }
}

export async function patchOneOrderHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const order = await OrderUseCases.patchUpdateOneOrders(req.params);
    logger.info({ component: 'OrderService', func: 'patchOneOrderHandler', additionalInfo: order });
    res.status(200).send(order);
  } catch (error) {
    logger.error({ component: 'OrderService', func: 'patchOneOrderHandler', additionalInfo: error });
    next(error);
  }
}
