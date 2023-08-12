import Joi, { ValidationResult } from 'joi';
import { User } from './interface';

export class CustomerValidation {
  private static _instance: CustomerValidation;

  public static get instance(): CustomerValidation {
    if (!CustomerValidation._instance) {
      CustomerValidation._instance = new CustomerValidation();
    }
    return CustomerValidation._instance;
  }

  public getOneUserValidation(params: Partial<User>): ValidationResult<User> {
    const schema = Joi.object({
      email: Joi.string().email().required(),
    });
    return schema.validate(params);
  }
}
