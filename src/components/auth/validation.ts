import Joi, { ValidationResult } from "joi";
import { User } from "./interface";

export class AuthValidation {
  private static _instance: AuthValidation;

  public static get instance(): AuthValidation {
    if (!AuthValidation._instance) {
      AuthValidation._instance = new AuthValidation();
    }
    return AuthValidation._instance;
  }

  public postCreateUserValidate(params: any): ValidationResult<any> {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      passwordConfirmation: Joi.ref("password"),
    });
    return schema.validate(params);
  }

  public getOneUserValidation(params: Partial<User>): ValidationResult<User> {
    const schema = Joi.object({
      email: Joi.string().email().required(),
    });
    return schema.validate(params);
  }
}
