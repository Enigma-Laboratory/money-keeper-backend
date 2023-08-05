import Joi, { ValidationResult } from 'joi';

export class SessionValidation {
  private static _instance: SessionValidation;

  public static get instance() {
    if (!SessionValidation._instance) {
      SessionValidation._instance = new SessionValidation();
    }
    return SessionValidation._instance;
  }
  public postCreateSessionValidation(params: any): ValidationResult<any> {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    return schema.validate(params);
  }

  public getOneSessionValidation(params: Partial<any>): ValidationResult<any> {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    return schema.validate(params);
  }
}
