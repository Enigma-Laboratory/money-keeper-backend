import Joi, { ValidationResult } from 'joi';
import {
  DeleteOneOrderParams,
  FindAllOrderParams,
  CreateOneOrderParams,
  UpdateOneOrderParams,
  FindOneOrderParams,
} from '@/enigma-laboratory/sdk';
import { FindAllOrderDetailByOrderIdParams } from '@/enigma-laboratory/sdk';
import { BadRequestError } from '@/errors';

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
      id: Joi.string().required(),
    });
    return schema.validate(params);
  }

  public getAllOrderValidate(params: FindAllOrderParams): ValidationResult<FindAllOrderParams> {
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

  public getAllOrderDetailByOrderIdValidate(
    params: FindAllOrderDetailByOrderIdParams,
  ): ValidationResult<FindAllOrderDetailByOrderIdParams> {
    const schema = Joi.object({
      orderId: Joi.string().required(),
    });
    return schema.validate(params);
  }

  public createOneOrderValidate(params: CreateOneOrderParams): ValidationResult<CreateOneOrderParams> {
    const schema = Joi.object({
      name: Joi.string().required(),
      userId: Joi.string().required(),
    });
    return schema.validate(params);
  }

  public updateOneOrderValidate(params: UpdateOneOrderParams): ValidationResult<UpdateOneOrderParams> {
    const schema = Joi.object({
      id: Joi.string().required(),
      name: Joi.string().required(),
    });
    return schema.validate(params);
  }

  public deleteOneOrderValidate(params: DeleteOneOrderParams): ValidationResult<DeleteOneOrderParams> {
    const schema = Joi.object({
      id: Joi.string().required(),
    });
    return schema.validate(params);
  }
}
