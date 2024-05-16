import {
  CreateOneOrderParams,
  DeleteOneOrderParams,
  FindAllOrderDetailParams,
  FindAllOrderParams,
  FindOneOrderParams,
  UpdateOneOrderParams,
  UpdateOrderEventParams,
  UpdateOrderEventResponse,
} from '@enigma-laboratory/shared';
import Joi, { ValidationResult } from 'joi';

export class OrderValidation {
  private static _instance: OrderValidation;
  public static get instance(): OrderValidation {
    if (!OrderValidation._instance) {
      this._instance = new OrderValidation();
    }
    return this._instance;
  }

  public getOneOrderValidate(params: FindOneOrderParams): ValidationResult<FindOneOrderParams> {
    const schema = Joi.object({
      _id: Joi.string().required(),
    });
    return schema.validate(params);
  }

  public getAllOrderValidate(params: FindAllOrderParams): ValidationResult<FindAllOrderParams> {
    const schema = Joi.object({
      scope: Joi.string(),
      sorters: Joi.array().items(Joi.string()),
      page: Joi.number(),
      pageSize: Joi.number(),
      startDate: Joi.date(),
      endDate: Joi.date(),
      month: Joi.number(),
      group: Joi.string(),
    });
    return schema.validate(params);
  }

  public getAllOrderDetailByOrderIdValidate(
    params: FindAllOrderDetailParams,
  ): ValidationResult<FindAllOrderDetailParams> {
    const schema = Joi.object({
      orderId: Joi.string().required(),
    });
    return schema.validate(params);
  }

  public createOneOrderValidate(params: CreateOneOrderParams): ValidationResult<CreateOneOrderParams> {
    const schema = Joi.object({
      name: Joi.string().required(),
      userId: Joi.string().required(),
      createdOrderAt: Joi.date().required(),
      products: Joi.array().items(Joi.object()).required(),
      groupId: Joi.string().required(),
      description: Joi.string().optional(),
    });
    return schema.validate(params);
  }

  public updateOneOrderValidate(params: UpdateOneOrderParams): ValidationResult<UpdateOneOrderParams> {
    const schema = Joi.object({
      _id: Joi.string().required(),
      name: Joi.string().required(),
      userId: Joi.string().required(),
      createdOrderAt: Joi.date().required(),
      products: Joi.array().items(Joi.object()).required(),
      groupId: Joi.string().required(),
      description: Joi.string().optional(),
    });
    return schema.validate(params);
  }

  public updateOrderEvent(params: UpdateOrderEventParams): ValidationResult<UpdateOrderEventResponse> {
    const schema = Joi.object({
      date: Joi.date().optional(),
      status: Joi.string().required(),
      orderId: Joi.string().required(),
    });
    return schema.validate(params);
  }

  public deleteOneOrderValidate(params: DeleteOneOrderParams): ValidationResult<DeleteOneOrderParams> {
    const schema = Joi.object({
      _id: Joi.string().required(),
    });
    return schema.validate(params);
  }
}
