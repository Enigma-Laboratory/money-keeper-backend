import {
  CreateOneOrderParams,
  DeleteOneOrderParams,
  FindAllDailyOrderParams,
  FindAllDailyOrderRevenueParams,
  FindAllOrderDetailParams,
  FindAllOrderParams,
  FindOneOrderParams,
  UpdateManyOrderStatusesParams,
  UpdateOneOrderParams,
  UpdateOrderStatusParams,
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
      start: Joi.date(),
      end: Joi.date(),
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

  public updateOrderStatus(params: UpdateOrderStatusParams): ValidationResult<UpdateOrderStatusParams> {
    const schema = Joi.object({
      date: Joi.date().optional(),
      status: Joi.string().required(),
      orderId: Joi.string().required(),
      userId: Joi.string().optional(),
    });
    return schema.validate(params);
  }

  public updateOrderStatuses(params: UpdateManyOrderStatusesParams): ValidationResult<UpdateManyOrderStatusesParams> {
    const schema = Joi.object({
      orderIds: Joi.array().items(Joi.string()).required(),
      status: Joi.string().required(),
    });
    return schema.validate(params);
  }

  public deleteOneOrderValidate(params: DeleteOneOrderParams): ValidationResult<DeleteOneOrderParams> {
    const schema = Joi.object({
      _id: Joi.string().required(),
    });
    return schema.validate(params);
  }

  public getDailyOrderRevenueValidate(
    params: FindAllDailyOrderRevenueParams,
  ): ValidationResult<FindAllDailyOrderRevenueParams> {
    const schema = Joi.object({
      start: Joi.date().required(),
      end: Joi.date().required(),
    });
    return schema.validate(params);
  }

  public getDailyOrderValidate(params: FindAllDailyOrderParams): ValidationResult<FindAllDailyOrderParams> {
    const schema = Joi.object({
      start: Joi.date().required(),
      end: Joi.date().required(),
    });
    return schema.validate(params);
  }
}
