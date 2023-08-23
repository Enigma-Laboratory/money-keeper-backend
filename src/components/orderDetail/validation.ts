import Joi from 'joi';
import { BadRequestError } from '@/errors';
import {
  CreateOneOrderDetailParams,
  DeleteOneOrderDetailParams,
  FindOneOrderDetailParams,
  UpdateOneOrderDetailParams,
} from '@/enigma-laboratory/sdk';
export class OrderDetailValidation {
  private static _instance: OrderDetailValidation;
  public static get instance(): OrderDetailValidation {
    if (!OrderDetailValidation._instance) {
      this._instance = new this();
    }
    return this._instance;
  }

  public createOrderDetail(params: CreateOneOrderDetailParams): void {
    const schema = Joi.object({
      orderId: Joi.string().required(),
      name: Joi.string().required(),
      description: Joi.string(),
      price: Joi.number().required(),
    });
    const validate = schema.validate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);
  }

  public updateOneOrderDetail(params: UpdateOneOrderDetailParams): void {
    const schema = Joi.object({
      id: Joi.string().required(),
      name: Joi.string(),
      description: Joi.string(),
      price: Joi.number(),
    });
    const validate = schema.validate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);
  }

  public getOneOrderDetail(params: FindOneOrderDetailParams): void {
    const schema = Joi.object({
      id: Joi.string().required(),
    });
    const validate = schema.validate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);
  }

  public deleteOneOrderDetail(params: DeleteOneOrderDetailParams): void {
    const schema = Joi.object({
      id: Joi.string(),
    });
    const validate = schema.validate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);
  }
}
