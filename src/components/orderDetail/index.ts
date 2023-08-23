import { NextFunction, Request, Response } from 'express';
import { OrderDetailValidation } from './validation';
import * as OrderDetailUseCases from './use-cases';
import logger from '@/utils/logger';

export async function getAllOrderDetailHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const OrderDetail = await OrderDetailUseCases.getAllOrderDetail(req.params);
    res.send(OrderDetail);
  } catch (error: any) {
    logger.error({ component: 'OrderDetailService', func: 'getAllOrderDetailHandler', additionalInfo: error });
    next(error);
  }
}

export async function getOneOrderDetailHandler(req: Request, res: Response, next: NextFunction): Promise<any> {
  try {
    OrderDetailValidation.instance.getOneOrderDetail(req.params);

    const orderDetail = await OrderDetailUseCases.deleteOneOrderDetail(req.params);
    return res.send(orderDetail);
  } catch (error: any) {
    next(error);
  }
}

export async function createOneOrderDetailHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    OrderDetailValidation.instance.createOrderDetail(req.body);

    const orderDetail = await OrderDetailUseCases.postCreateOrderDetail(req.body);
    res.send(orderDetail);
  } catch (error: any) {
    next(error);
  }
}

export async function updateOrderDetailHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    OrderDetailValidation.instance.updateOneOrderDetail(req.body);

    const orderDetail = await OrderDetailUseCases.updateOneOrderDetail(req.body);
    res.send(orderDetail);
  } catch (error: any) {
    next(error);
  }
}
export async function deleteOneOrderDetailHandler(req: Request, res: Response, next: NextFunction): Promise<any> {
  try {
    OrderDetailValidation.instance.deleteOneOrderDetail(req.params);

    const orderDetail = await OrderDetailUseCases.deleteOneOrderDetail(req.params);
    return res.send(orderDetail);
  } catch (error: any) {
    next(error);
  }
}
