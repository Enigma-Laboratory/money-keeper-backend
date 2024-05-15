import { FindOneUserParams, UpdateOneUserParams } from '@enigma-laboratory/shared';
import Joi, { ValidationResult } from 'joi';

export class UserValidation {
  private static _instance: UserValidation;

  public static get instance(): UserValidation {
    if (!UserValidation._instance) {
      UserValidation._instance = new UserValidation();
    }
    return UserValidation._instance;
  }

  public getOneUserValidate(params: FindOneUserParams): ValidationResult<FindOneUserParams> {
    const schema = Joi.object({
      _id: Joi.string().optional(),
      email: Joi.string().optional(),
    });
    return schema.validate(params);
  }

  public updateOneUserValidation(params: UpdateOneUserParams): ValidationResult<UpdateOneUserParams> {
    const schema = Joi.object({
      _id: Joi.string().optional(),
      email: Joi.string().optional(),
      name: Joi.string().optional(),
      address: Joi.string().optional(),
      numberPhone: Joi.string().optional(),
      image: Joi.string().optional(),
      password: Joi.string().optional(),
    });

    return schema.validate(params);
  }
}
