import Joi from 'joi';
import { FindOneUserParams, UpdateOneUserParams } from '@/packages/user/user.interfaces';
import { BadRequestError } from '@/errors';

export class UserValidation {
  private static _instance: UserValidation;

  public static get instance(): UserValidation {
    if (!UserValidation._instance) {
      UserValidation._instance = new UserValidation();
    }
    return UserValidation._instance;
  }

  public getOneUserValidation(params: FindOneUserParams): void {
    const schema = Joi.object({
      id: Joi.string().required(),
    });
    const validate = schema.validate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);
  }

  public updateOneUserValidation(params: UpdateOneUserParams): void {
    const schema = Joi.object({
      id: Joi.string().required(),
      name: Joi.string().required(),
    });

    const validate = schema.validate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);
  }
}
