import Joi, { ValidationResult } from "joi";
import { GetOneOrderDetailParams } from "./interface";

export class OrderDetailValidation {
  private static _instance: OrderDetailValidation;
  public static get instance(): OrderDetailValidation {
    if (!OrderDetailValidation.instance) {
      this._instance = new OrderDetailValidation();
    }
    return this._instance;
  }

  public postCreateOrderDetail(params: any): ValidationResult<any> {
    const schema = Joi.object({});
    return schema.validate(params);
  }

  public getOneOrderDetail(
    params: GetOneOrderDetailParams
  ): ValidationResult<GetOneOrderDetailParams> {
    const schema = Joi.object({
      id: Joi.string().required(),
    });
    return schema.validate(params);
  }
}
