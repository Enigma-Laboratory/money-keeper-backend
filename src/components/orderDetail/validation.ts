import Joi, { ValidationResult } from 'joi';
import { GetOneOrderDetailParams } from './interface';

export class OrderDetailValidation {
  private static _instance: OrderDetailValidation;
  public static get instance(): OrderDetailValidation {
    if (!OrderDetailValidation._instance) {
      this._instance = new this();
    }
    return this._instance;
  }

  public postCreateOrderDetail(params: any): ValidationResult<any> {
    const schema = Joi.object({
      orderId: Joi.string().required(),
      product: Joi.string().required(),
      quantity: Joi.number().required(),
      price: Joi.number().required(),
    });
    return schema.validate(params);
  }

  public putUpdateOrderDetail(params_body: any): ValidationResult<any> {
    const schema = Joi.object({
      orderId: Joi.string().required(),
    });
    return schema.validate(params_body);
  }

  public getOneOrderDetail(params: GetOneOrderDetailParams): ValidationResult<GetOneOrderDetailParams> {
    const schema = Joi.object({
      id: Joi.string().required(),
    });
    return schema.validate(params);
  }

  public deleteOneOrderDetail(id: any): ValidationResult<any> {
    const schema = Joi.object({
      id: Joi.string(),
    });
    return schema.validate(id);
  }
}
