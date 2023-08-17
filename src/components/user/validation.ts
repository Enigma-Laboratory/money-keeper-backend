import Joi, { ValidationResult } from 'joi';
import { FindOneUserParams } from './interface';

export class UserValidation {
  private static _instance: UserValidation;

  public static get instance(): UserValidation {
    if (!UserValidation._instance) {
      UserValidation._instance = new UserValidation();
    }
    return UserValidation._instance;
  }

  public getOneUserValidation(params: FindOneUserParams): ValidationResult<FindOneUserParams> {
    const schema = Joi.object({
      id: Joi.string().required(),
    });
    return schema.validate(params);
  }
}
