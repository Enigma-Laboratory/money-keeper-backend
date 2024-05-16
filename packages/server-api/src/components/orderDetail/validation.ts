import {
  CreateOneOrderDetailParams,
  DeleteOneOrderDetailParams,
  FindOneOrderDetailParams,
  UpdateOneOrderDetailParams,
} from '@enigma-laboratory/shared';
import Joi, { ValidationResult } from 'joi';
export class OrderDetailValidation {
  private static _instance: OrderDetailValidation;
  public static get instance(): OrderDetailValidation {
    if (!OrderDetailValidation._instance) {
      this._instance = new this();
    }
    return this._instance;
  }

  public createOrderDetail(params: CreateOneOrderDetailParams): ValidationResult<CreateOneOrderDetailParams> {
    const schema = Joi.object({
      orderId: Joi.string().required(),
      name: Joi.string().required(),
      description: Joi.string(),
      price: Joi.number().required(),
    });
    return schema.validate(params);
  }

  public updateOneOrderDetail(params: UpdateOneOrderDetailParams): ValidationResult<UpdateOneOrderDetailParams> {
    const schema = Joi.object({
      id: Joi.string().required(),
      name: Joi.string(),
      description: Joi.string(),
      price: Joi.number(),
    });
    return schema.validate(params);
  }

  public getOneOrderDetailValidate(params: FindOneOrderDetailParams): ValidationResult<FindOneOrderDetailParams> {
    const schema = Joi.object({
      id: Joi.string().required(),
    });
    return schema.validate(params);
  }

  public deleteOneOrderDetail(params: DeleteOneOrderDetailParams): ValidationResult<DeleteOneOrderDetailParams> {
    const schema = Joi.object({
      id: Joi.string(),
    });
    return schema.validate(params);
  }
}
