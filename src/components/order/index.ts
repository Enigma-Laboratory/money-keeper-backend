import { Request, Response } from "express";
import logger from "../../utils/logger";
import * as OrderUseCases from "./use-cases";
import { OrderValidation } from "./validation";

export async function postCreateOrderHandler(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const params = req.body;
    const validate = OrderValidation.instance.postCreateOrder(params);

    if (validate.error) {
      return res.status(409).send(validate.error.message);
    }
    const order = await OrderUseCases.postCreateOrder(params);
    return res.send(order);
  } catch (e: any) {
    logger.error(`create order ${e}`);
    return res.status(409).send(e.message);
  }
}

export async function getAllOrderHandler(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const params = req.params;
    const validate = OrderValidation.instance.getAllOrderParams(params);

    if (validate.error) {
      return res.status(409).send(validate.error.message);
    }
    const deleteOrder = await OrderUseCases.getAllOrders(params);
    return res.send(deleteOrder);
  } catch (e: any) {
    logger.error(`get orders ${e}`);
    return res.status(409).send(e.message);
  }
}

export async function getOneOrderHandler(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const params = req.params;
    const validate = OrderValidation.instance.getOneOrder(params);
    if (validate.error) {
      return res.status(409).send(validate.error.message);
    }
    const deleteOrder = await OrderUseCases.getOneOrders(params);
    return res.send(deleteOrder);
  } catch (e: any) {
    logger.error(`get orders ${e}`);
    return res.status(409).send(e.message);
  }
}

export async function deleteOneOrderHandler(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const params = req.body;
    const validate = OrderValidation.instance.deleteOneOrder(params);

    if (validate.error) {
      return res.status(409).send(validate.error.message);
    }
    const deleteOrder = await OrderUseCases.deleteOneOrder(params);
    return res.send(deleteOrder);
  } catch (e: any) {
    logger.error(`delete order ${e}`);
    return res.status(409).send(e.message);
  }
}

export async function patchOneOrderHandler(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const params = req.body;
    const validate = OrderValidation.instance.updateOrderParams(params);
    if (validate.error) {
      return res.status(409).send(validate.error.message);
    }
    const order = await OrderUseCases.patchUpdateOneOrders(params);
    return res.send(order);
  } catch (e: any) {
    logger.error(`patch orders ${e}`);
    return res.status(409).send(e.message);
  }
}
