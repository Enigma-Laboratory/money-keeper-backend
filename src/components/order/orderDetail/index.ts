import { Request, Response } from "express";
import { OrderDetailValidation } from "./validation";
import logger from "../../../utils/logger";
import * as OrderDetailUseCases from "./use-cases";

export async function postCreateOrderDetailHandler(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const params = req.body;
    const validate =
      OrderDetailValidation.instance.postCreateOrderDetail(params);

    if (validate.error) {
      logger.error(`not create order detail by ${validate.error.message} `);
      return res.status(409).send(validate.error.message);
    }
    const orderDetail = await OrderDetailUseCases.postCreateOrderDetail(params);
    return res.send(orderDetail);
  } catch (e: any) {
    logger.error(`create order detail ${e}`);
    return res.status(409).send(e.message);
  }
}
