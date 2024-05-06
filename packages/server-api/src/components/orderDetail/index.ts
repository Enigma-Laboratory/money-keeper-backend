import logger from '@/utils/logger';
import { NextFunction, Request, Response } from 'express';
import * as OrderDetailUseCases from './use-cases';

export async function getAllOrderDetailHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const OrderDetail = await OrderDetailUseCases.getAllOrderDetail(req.params);
    res.send(OrderDetail);
  } catch (error: any) {
    logger.error({
      component: 'OrderDetailService',
      func: 'getAllOrderDetailHandler',
      additionalInfo: error,
    });
    next(error);
  }
}

export async function getOneOrderDetailHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const _id = req.params as unknown as string;
    const orderDetail = await OrderDetailUseCases.deleteOneOrderDetail({ _id });
    res.status(200).send(orderDetail);
  } catch (error: any) {
    logger.error({
      component: 'OrderDetailService',
      func: 'getOneOrderDetailHandler',
      additionalInfo: error,
    });
    next(error);
  }
}

export async function createOneOrderDetailHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const orderDetail = await OrderDetailUseCases.createOrderDetail(req.body);
    res.status(200).send(orderDetail);
  } catch (error: any) {
    logger.error({
      component: 'OrderDetailService',
      func: 'createOneOrderDetailHandler',
      additionalInfo: error,
    });
    next(error);
  }
}

export async function updateOrderDetailHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const orderDetail = await OrderDetailUseCases.updateOneOrderDetail(req.body);
    res.status(200).send(orderDetail);
  } catch (error: any) {
    logger.error({
      component: 'OrderDetailService',
      func: 'updateOrderDetailHandler',
      additionalInfo: error,
    });
    next(error);
  }
}
export async function deleteOneOrderDetailHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const orderDetail = await OrderDetailUseCases.deleteOneOrderDetail(req.params as any);
    res.status(200).send(orderDetail);
  } catch (error: any) {
    logger.error({
      component: 'OrderDetailService',
      func: 'deleteOneOrderDetailHandler',
      additionalInfo: error,
    });
    next(error);
  }
}
