import logger from '@/utils/logger';
import { Request, Response } from 'express';
import * as OrderDetailUseCases from './use-cases';
import { OrderDetailValidation } from './validation';

export async function getAllOrderDetailHandler(req: Request, res: Response): Promise<any> {
  try {
    const params = req.params;
    const OrderDetail = await OrderDetailUseCases.getAllOrderDetail(params);
    return res.send(OrderDetail);
  } catch (e: any) {
    logger.error(`get all order detail ${e}`);
    return res.status(409).send(e.message);
  }
}

export async function postCreateOrderDetailHandler(req: Request, res: Response): Promise<any> {
  try {
    const body = req.body;
    const validate = OrderDetailValidation.instance.postCreateOrderDetail(body);

    if (validate.error) {
      logger.error(`not create order detail by ${validate.error.message}`);
      return res.status(409).send(validate.error.message);
    }
    const orderDetail = await OrderDetailUseCases.postCreateOrderDetail(body);
    return res.send(orderDetail);
  } catch (e: any) {
    logger.error(`create order detail ${e}`);
    return res.status(409).send(e.message);
  }
}

export async function putUpdateOrderDetailHandler(req: Request, res: Response): Promise<any> {
  try {
    const body = req.body;
    const orderId = req.url.match(/\/(.*?)\//)![1];
    const validate = OrderDetailValidation.instance.putUpdateOrderDetail({ orderId, ...body });

    if (validate.error) {
      logger.error(`not update order detail by ${validate.error.message}`);
      return res.status(409).send(validate.error.message);
    }
    const orderDetail = await OrderDetailUseCases.putUpdateOrderDetail({ orderId }, body);
    return res.send(orderDetail);
  } catch (e: any) {
    logger.error(`update order detail ${e}`);
    return res.status(409).send(e.message);
  }
}
export async function deleteOrderDetailHandler(req: Request, res: Response): Promise<any> {
  try {
    const id = req.url.replace('/', '');
    const validate = OrderDetailValidation.instance.deleteOneOrderDetail({ id });

    if (validate.error) {
      logger.error(`not delete order detail by ${validate.error.message}`);
      return res.status(409).send(validate.error.message);
    }
    const orderDetail = await OrderDetailUseCases.deleteOneOrderDetail(id);
    return res.send(orderDetail);
  } catch (e: any) {
    logger.error(`delete order detail ${e}`);
    return res.status(409).send(e.message);
  }
}
