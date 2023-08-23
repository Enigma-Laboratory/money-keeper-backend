import Joi from 'joi';
import {
  DeleteOneOrderParams,
  FindAllOrderParams,
  CreateOneOrderParams,
  UpdateOrderParams,
  FindOneOrderParams,
} from '@/packages/order/order.interfaces';
import { FindAllOrderDetailByOrderIdParams } from '@/packages/orderDetail/orderDetail.interfaces';
import { BadRequestError } from '@/errors';

export class OrderValidation {
  private static _instance: OrderValidation;
  public static get instance(): OrderValidation {
    if (!OrderValidation._instance) {
      this._instance = new OrderValidation();
    }
    return this._instance;
  }

  public getOneOrder(params: FindOneOrderParams): void {
    const schema = Joi.object({
      id: Joi.string().required(),
    });
    const validate = schema.validate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);
  }

  public getAllOrderParams(params: FindAllOrderParams): void {
    const schema = Joi.object({
      id: Joi.string(),
      orderName: Joi.string(),
      userId: Joi.string(),
      createdAt: Joi.date(),
      updatedAt: Joi.date(),
      scope: Joi.string(),
      sorters: Joi.array().items(Joi.string()),
      page: Joi.number(),
      pageSize: Joi.number(),
    });
    const validate = schema.validate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);
  }

  public getAllOrderDetailByOrderId(params: FindAllOrderDetailByOrderIdParams): void {
    const schema = Joi.object({
      orderId: Joi.string().required(),
    });
    const validate = schema.validate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);
  }

  public createOneOrder(params: CreateOneOrderParams): void {
    const schema = Joi.object({
      name: Joi.string().required(),
      userId: Joi.string().required(),
    });
    const validate = schema.validate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);
  }

  public updateOrderParams(params: UpdateOrderParams): void {
    const schema = Joi.object({
      id: Joi.string().required(),
      name: Joi.string().required(),
    });
    const validate = schema.validate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);
  }

  public deleteOneOrder(params: DeleteOneOrderParams): void {
    const schema = Joi.object({
      id: Joi.string().required(),
    });
    const validate = schema.validate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);
  }
}
