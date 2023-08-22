import Joi, { ValidationResult } from 'joi';
import {
  CreateOneOrderParams,
  DeleteOrderParams,
  FindAllOrderParams,
  FindOneOrderParams,
  UpdateOrderParams,
} from './interface';

export class OrderValidation {
  private static _instance: OrderValidation;
  public static get instance(): OrderValidation {
    if (!OrderValidation._instance) {
      this._instance = new OrderValidation();
    }
    return this._instance;
  }

  public postCreateOneOrder(params: CreateOneOrderParams): ValidationResult<CreateOneOrderParams> {
    const schema = Joi.object({
      orderName: Joi.string().required(),
      userId: Joi.string().required(),
    });
    return schema.validate(params);
  }

  public getOneOrder(params: FindOneOrderParams): ValidationResult<FindOneOrderParams> {
    const schema = Joi.object({
      id: Joi.string().required(),
    });
    return schema.validate(params);
  }

  public deleteOneOrder(params: DeleteOrderParams): ValidationResult<DeleteOrderParams> {
    const schema = Joi.object({
      _id: Joi.string().required(),
    });
    return schema.validate(params);
  }

  public getAllOrderParams(params: FindAllOrderParams): ValidationResult<FindAllOrderParams> {
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
    return schema.validate(params);
  }

  public updateOrderParams(params: UpdateOrderParams): ValidationResult<UpdateOrderParams> {
    const schema = Joi.object({
      _id: Joi.string().required(),
      orderName: Joi.string().required(),
    });
    return schema.validate(params);
  }
}
