import { CreateUserParams, LoginParams } from "@enigma-laboratory/shared";
import Joi, { ValidationResult } from "joi";
export class AuthValidation {
  private static _instance: AuthValidation;

  public static get instance(): AuthValidation {
    if (!AuthValidation._instance) {
      AuthValidation._instance = new AuthValidation();
    }
    return AuthValidation._instance;
  }

  public signInValidate(params: LoginParams): ValidationResult<LoginParams> {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    return schema.validate(params);
  }

  public signUpValidate(
    params: CreateUserParams,
  ): ValidationResult<CreateUserParams> {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    return schema.validate(params);
  }
}
