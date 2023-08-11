import Joi, { ValidationResult } from 'joi';

export class OtherValidation {
  private static _instance: OtherValidation;

  public static get instance(): OtherValidation {
    if (!OtherValidation._instance) {
      OtherValidation._instance = new OtherValidation();
    }
    return OtherValidation._instance;
  }

  public loginValidate(params: any): ValidationResult<any> {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    return schema.validate(params);
  }
}
