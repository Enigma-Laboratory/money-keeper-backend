import { RequestWithUser } from '@/interface';
import logger from '@/utils/logger';
import { parseQueryParams } from '@/utils/parseQueryParams';
import { FindAllDailyOrderRevenueParams, User } from '@enigma-laboratory/shared';
import { NextFunction, Request, Response } from 'express';
import * as OrderUseCases from './use-cases';

export async function createOneOrderHandler(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
  try {
    const order = await OrderUseCases.postCreateOneOrder(req?.actor as User, req.body);
    logger.info({
      component: 'OrderService',
      func: 'postCreateOneOrderHandler',
      additionalInfo: order,
    });
    res.status(200).send(order);
  } catch (error) {
    logger.error({
      component: 'OrderService',
      func: 'postCreateOneOrderHandler',
      additionalInfo: error,
    });
    next(error);
  }
}

export async function getAllOrderHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const params = parseQueryParams(req.query);
    const orders = await OrderUseCases.getAllOrders(params);
    res.status(200).send(orders);
  } catch (error) {
    logger.error({
      component: 'OrderService',
      func: 'getAllOrderHandler',
      additionalInfo: error,
    });
    next(error);
  }
}

export async function getOneOrderHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  const _id = req.url.replace('/', '');
  try {
    const order = await OrderUseCases.getOneOrder({ _id });
    logger.info({
      component: 'OrderService',
      func: 'getOneOrderHandler',
      additionalInfo: order,
    });
    res.status(200).send(order);
  } catch (error) {
    logger.error({
      component: 'OrderService',
      func: 'getOneOrderHandler',
      additionalInfo: error,
    });
    next(error);
  }
}

export async function getOrderDetailByOrderIdHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  const id = req.url.replace('/details', '').replace('/', '');
  try {
    const orderDetail = await OrderUseCases.getOrderDetailByOrderId({
      orderId: id,
    });
    logger.info({
      component: 'OrderService',
      func: 'getOneOrderHandler',
      additionalInfo: orderDetail,
    });
    res.status(200).send(orderDetail);
  } catch (error) {
    logger.error({
      component: 'OrderService',
      func: 'getOneOrderHandler',
      additionalInfo: error,
    });
    next(error);
  }
}

export async function deleteOneOrderHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const deleteOrder = await OrderUseCases.deleteOneOrder({ _id: req.params.id });
    logger.info({
      component: 'OrderService',
      func: 'deleteOneOrderHandler',
      additionalInfo: deleteOrder,
    });
    res.status(200).send(deleteOrder);
  } catch (error) {
    logger.error({
      component: 'OrderService',
      func: 'deleteOneOrderHandler',
      additionalInfo: error,
    });
    next(error);
  }
}

export async function updateOneOrderHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const order = await OrderUseCases.updateOneOrder(req.body);
    logger.info({
      component: 'OrderService',
      func: 'putOneOrderHandler',
      additionalInfo: order,
    });
    res.status(200).send(order);
  } catch (error) {
    logger.error({
      component: 'OrderService',
      func: 'putOneOrderHandler',
      additionalInfo: error,
    });
    next(error);
  }
}

export async function updateOrderEventHandler(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
  try {
    const order = await OrderUseCases.updateOrderStatus(req?.actor as User, req.body);
    logger.info({
      component: 'OrderService',
      func: 'updateOrderEventHandler',
      additionalInfo: order,
    });
    res.status(200).send(order);
  } catch (error) {
    logger.error({
      component: 'OrderService',
      func: 'updateOrderEventHandler',
      additionalInfo: error,
    });
    next(error);
  }
}

export async function updateOrderEventsHandler(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
  try {
    const orderEventUpdated = await OrderUseCases.updateOrderStatuses(req?.actor as User, req.body);
    logger.info({
      component: 'OrderService',
      func: 'updateOrderEventsHandler',
      additionalInfo: orderEventUpdated,
    });
    res.status(200).send(orderEventUpdated);
  } catch (error) {
    logger.error({
      component: 'OrderService',
      func: 'updateOrdersEventHandler',
      additionalInfo: error,
    });
    next(error);
  }
}

export async function getDailyRevenueHandler(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
  try {
    const params = parseQueryParams(req.query);
    const dailyRevenue = await OrderUseCases.getDailyOrderRevenue(params as unknown as FindAllDailyOrderRevenueParams);
    res.status(200).json(dailyRevenue);
  } catch (error) {
    logger.error({
      component: 'OrderService',
      func: 'getDailyRevenueHandler',
      additionalInfo: error,
    });
    next(error);
  }
}
