import Joi, { ValidationResult } from "joi";
import { GetOneOrderParams } from "./interface";

export class OrderValidation {
  private static _instance: OrderValidation;
  public static get instance(): OrderValidation {
    if (!OrderValidation.instance) {
      this._instance = new OrderValidation();
    }
    return this._instance;
  }

  public postCreateOrder(params: any): ValidationResult<any> {
    const schema = Joi.object({});
    return schema.validate(params);
  }

  public getOneOrder(
    params: GetOneOrderParams
  ): ValidationResult<GetOneOrderParams> {
    const schema = Joi.object({
      id: Joi.string().required(),
    });
    return schema.validate(params);
  }
}
