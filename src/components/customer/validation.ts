import Joi, { ValidationResult } from 'joi';
import { FindOneUserParams } from './interface';

export class CustomerValidation {
  private static _instance: CustomerValidation;

  public static get instance(): CustomerValidation {
    if (!CustomerValidation._instance) {
      CustomerValidation._instance = new CustomerValidation();
    }
    return CustomerValidation._instance;
  }

  public getOneUserValidation(params: FindOneUserParams): ValidationResult<FindOneUserParams> {
    const schema = Joi.object({
      id: Joi.string().required(),
    });
    return schema.validate(params);
  }
}
