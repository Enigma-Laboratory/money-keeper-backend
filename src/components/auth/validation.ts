import Joi, { ValidationResult } from 'joi';
import { CreateUserParams, FindOneUserParams } from './interfaces';
import { BadRequestError } from '@/errors';

export class AuthValidation {
  private static _instance: AuthValidation;

  public static get instance(): AuthValidation {
    if (!AuthValidation._instance) {
      AuthValidation._instance = new AuthValidation();
    }
    return AuthValidation._instance;
  }

  public signInValidate(params: FindOneUserParams): void {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    const validate = schema.validate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);
  }

  public signUpValidate(params: CreateUserParams): void {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    const validate = schema.validate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);
  }
}
