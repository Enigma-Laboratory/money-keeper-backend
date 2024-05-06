import { BadRequestError } from '@/errors';
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

  public updateOneUserValidation(params: UpdateOneUserParams): void {
    const schema = Joi.object({
      _id: Joi.string().required(),
      name: Joi.string().required(),
    });

    const validate = schema.validate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);
  }
}
